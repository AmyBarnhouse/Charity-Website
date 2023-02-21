//window.addEventListener('click', function(event){
    //fetch('http://127.0.0.1:8090/list')
    //fetch('http://127.0.0.1:8090/lost')
    //fetch('http://1277.0.0.1:8090/list')
    //fetch('http://126.0.0.1:8090/list')


    //  .then(response => response.text())
    //  .then(body =>
    //     document.getElementById('content').innerHTML=body)
    //     .catch((error) => alert(error))

    window.addEventListener('click', async function(event){
        let response = await fetch('http://127.0.0.1:8090/list');
        let body = await response.text();
        document.getElementById('content').innerHTML=body
      });
 // });


//  window.addEventListener('click', async function(event){
//     try{
//       let response = await fetch('http://127.0.0.1:8090/list');
//       let body = await response.text();
//       document.getElementById('content').innerHTML=body;
//     } catch(e) {
//       alert(e);
//     }
// });