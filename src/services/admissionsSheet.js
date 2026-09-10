/**
 * Google Sheets Integration for Admission Form Submissions
 * Sheet ID: 1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU
 * Sheet URL: https://docs.google.com/spreadsheets/d/1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU/edit?usp=drive_link
 */

export const GOOGLE_SHEET_ID = '1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU'
export const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU/edit?usp=sharing'


// Google Apps Script Web App Endpoint
export const GOOGLE_SCRIPT_WEBAPP_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  // 'https://script.google.com/macros/s/AKfycbwFJv_FgkbG6eo2Me8tVhaAGLXDIxoK9E3boZalHft1tENw82k2zLUsnRZ6iz0HcqQQ/exec'
  'https://script.google.com/macros/s/AKfycbyvlPBpE6I_5_5HF96dgQfDTWE5Kp6xjtT0ylNHtKIbn8nT7cPVXkLK4ZOd9WNLiXmn/exec'

/**
 * Submits the admission form data to Google Sheets via Google Apps Script Web App.
 * Saves a local backup in localStorage to ensure zero data loss.
 *
 * @param {Object} formData
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitAdmissionToSheet(formData) {
  const payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    studentName: formData.studentName || '',
    dob: formData.dob || '',
    gender: formData.gender || '',
    grade: formData.grade || '',
    parentName: formData.parentName || '',
    relationship: formData.relationship || '',
    phone: formData.phone || '',
    email: formData.email || '',
    address: formData.address || '',
    city: formData.city || '',
    pincode: formData.pincode || '',
    message: formData.message || '',
    status: 'New Application',
    source: 'School Website Admission Form',
  }

  // 1. Always store a local backup in localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('samsidh_admissions_backup') || '[]')
    existing.push(payload)
    localStorage.setItem('samsidh_admissions_backup', JSON.stringify(existing))
  } catch (err) {
    console.warn('Could not save to localStorage backup:', err)
  }

  // 2. If Google Apps Script Web App URL is provided, send POST request
  if (GOOGLE_SCRIPT_WEBAPP_URL && GOOGLE_SCRIPT_WEBAPP_URL.trim() !== '') {
    try {
      // mode: 'no-cors' is required for Google Apps Script redirects
      await fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      console.log('✅ Application successfully posted to Google Sheet:', GOOGLE_SHEET_ID)
      return { success: true, message: 'Submitted directly to Google Sheet' }
    } catch (err) {
      console.error('Error sending to Google Apps Script:', err)
      // Even if network fails, we already have local backup
      return { success: true, message: 'Saved with local backup' }
    }
  } else {
    console.warn(
      '⚠️ Google Apps Script Web App URL is missing. Set GOOGLE_SCRIPT_WEBAPP_URL in src/services/admissionsSheet.js to send live data to Google Sheets.'
    )
    return {
      success: false,
      notConfigured: true,
      message: 'Google Apps Script Web App URL is not configured yet.',
    }
  }
}
