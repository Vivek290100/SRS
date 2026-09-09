/**
 * =========================================================================
 * Google Apps Script for Samsidh Satish Reddy School Admissions
 * Target Google Sheet ID: 1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU
 * =========================================================================
 * 
 * Step-by-Step Setup:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1I_44WFB8XfmTjJGs3G7jd17EXbpkedMMhwlM3oXBVBU/edit
 * 2. Click on "Extensions" -> "Apps Script" in the top menu.
 * 3. Delete any default code in the editor, and paste this entire file.
 * 4. (Optional) Run the "setupHeaders" function once to style the header row.
 * 5. Click "Deploy" (top-right blue button) -> "New deployment".
 * 6. Under "Select type" (gear icon ⚙️), choose "Web app".
 * 7. Set:
 *    - Description: "Admissions Form Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required so website visitors can submit)
 * 8. Click "Deploy" and authorize permissions.
 * 9. Copy the generated "Web app URL" (starts with https://script.google.com/macros/s/...)
 * 10. Paste it into src/services/admissionsSheet.js in the GOOGLE_SCRIPT_WEBAPP_URL variable.
 * =========================================================================
 */

function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Timestamp (IST)",
    "Student Name",
    "Date of Birth",
    "Gender",
    "Grade Applying For",
    "Parent / Guardian Name",
    "Relationship",
    "Contact Phone",
    "Email Address",
    "Residential Address",
    "City / Town",
    "PIN Code",
    "Message / Queries",
    "Status",
    "Source"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#0196FD")
      .setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Auto-create header row if sheet is brand new
    if (sheet.getLastRow() === 0) {
      setupHeaders();
    }

    var data;
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    } else {
      data = {};
    }

    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    var row = [
      timestamp,
      data.studentName || "",
      data.dob || "",
      data.gender || "",
      data.grade || "",
      data.parentName || "",
      data.relationship || "",
      data.phone || "",
      data.email || "",
      data.address || "",
      data.city || "",
      data.pincode || "",
      data.message || "",
      data.status || "New Application",
      data.source || "Website Online Form"
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      row: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Samsidh Satish Reddy School Admissions Webhook is Active!");
}
