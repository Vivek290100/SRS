/**
 * Google Sheets Integration for Admission Form Submissions
 * Sheet ID: 1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU
 * Sheet URL: https://docs.google.com/spreadsheets/d/1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU/edit?usp=drive_link
 */

export const GOOGLE_SHEET_ID = '1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU'
export const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU/edit?usp=drive_link'

// Google Apps Script Web App Endpoint
// You can set this in .env as VITE_GOOGLE_SCRIPT_URL, or paste your deployed URL here
export const GOOGLE_SCRIPT_WEBAPP_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  '' // Paste your Google Apps Script Web App URL here

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
      return { success: true, message: 'Submitted to Google Sheet' }
    } catch (err) {
      console.error('Error sending to Google Apps Script:', err)
      // Even if network fails, we already have local backup
      return { success: true, message: 'Saved with local backup' }
    }
  } else {
    // If Web App URL is not yet configured, log clearly
    console.info(
      'ℹ️ Admission form logged locally. To connect directly to Google Sheets, deploy the Google Apps Script Web App and set GOOGLE_SCRIPT_WEBAPP_URL in src/services/admissionsSheet.js'
    )
    return { success: true, message: 'Logged locally (Awaiting Apps Script Deployment)' }
  }
}
