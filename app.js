document.getElementById('get-joke').addEventListener('click', e => {
  let number = document.querySelector('input[type="number"]').value;
  number = parseInt(Math.abs(number)).toString();

  const xhr = new XMLHttpRequest();
  xhr.open('get', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.response);
      let output = '';
      if(response.type === 'success'){
        response.value.forEach(function(element, index){
          output += `<li>${index+1}. ${element.joke}</li>`
        });
      }else{
        output = '<li>Somethik went wrong</li>'
      };
      document.getElementById('joke-list').innerHTML = output;
      document.querySelector('input[type="number"]').value= '';
    };
  };
  xhr.send();
})
