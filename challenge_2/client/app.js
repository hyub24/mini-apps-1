
var sendRequest = () => {

  document.getElementById('input').addEventListener("click", () => {
    event.preventDefault();
    var report = document.getElementById('text').value;

    $.ajax({
      url: 'http://localhost:3000/csv',
      type: 'POST',
      data: report,
      contentType: 'application/json',
      success: (results) => {
        $("#formDiv").empty();
        $("#formDiv").append(results);
      },
      error: (err) => {
        console.log(err);
      }
    })
  });

//   document.getElementById('file3').addEventListener("click", (event) => {
//     event.preventDefault();
//     var file2 = document.getElementById('file2').value;
//     $.ajax({
//       url: 'http://localhost:3000/file',
//       type: 'POST',
//       data: JSON.stringify({ path:file2 }),
//       contentType: 'application/json',
//       success: (results) => {
//         console.log(results);
        
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     })
//   })
}

sendRequest();



