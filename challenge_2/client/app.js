
handleOnSubmit = () => {
  // needs to be refactored for indefinite submits
  // taking into account \n and comma separators
  var formData = document.getElementById("form-text").value.split('');
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
    let responseDataArr = this.response;
    console.log('responseDataArr:', this.response);
    let responseDataStr = '';
    for (var i = 0; i < responseDataArr.length; i++) {
      responseDataStr += responseDataArr[i] + '\n';
    }
    document.getElementById('form-text').value = responseDataStr.trim();
    console.log('RESPONSE FROM SERVER:\n', responseDataStr.trim());
  }
  xml.send(JSONStr);
}
