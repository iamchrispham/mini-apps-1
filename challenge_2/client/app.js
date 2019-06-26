
handleOnSubmit = () => {
  var formData = document.getElementById("form-text").value.split(', ');
  var JSONObj = { // firstName,lastName,county,city,role,sales
    firstName: formData[0],
    lastName: formData[1],
    county: formData[2],
    city: formData[3],
    role: formData[4],
    sales: formData[5],
    children: []
  };
  var JSONStr = JSON.stringify(JSONObj);
  var xml = new XMLHttpRequest();
  xml.responseType = 'json';
  xml.open('POST', '/', true);
  xml.setRequestHeader('Content-type', 'Application/json')
  xml.onload = function () {
    console.log('RESPONSE FROM SERVER:', this.response);
  }
  xml.send(JSONStr);
}
