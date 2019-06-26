handleOnSubmit = () => {

}

// sending a request without AJAX/JQuery
// handleOnSubmit = () => {
//   var formData = document.getElementById("form-text").value.split(', ');
//   var JSONObj = { // firstName,lastName,county,city,role,sales
//     firstName: formData[0],
//     lastName: formData[1],
//     county: formData[2],
//     city: formData[3],
//     role: formData[4],
//     sales: formData[5],
//     children: []
//   };
  
//   var xml = new XMLHttpRequest();
//   xml.open('POST', '/', true);
//   xml.setRequestHeader('Content-type', 'Application/json')
//   xml.send(JSON.stringify(JSONObj));
//   console.log('Hello! ', JSON.stringify(JSONObj));
// }
