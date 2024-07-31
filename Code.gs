  //This web app provides an interactive dashboard for managing projects, integrating data from Google Sheets.
function doGet() {
  return HtmlService.createHtmlOutputFromFile('dashboard');
}

function getProjects() {
  var ss = SpreadsheetApp.openByUrl('YOUR_SPREADSHEET_URL');
  var ws = ss.getSheetByName('Projects');
  var data = ws.getDataRange().getValues();
  return data;
}
