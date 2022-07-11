const form_login = document.getElementById('form_login');

form_login.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents reload page when form is submited
    
    let username = form_login.elements['username'].value;
    let password = form_login.elements['password'].value;

    fetch('http://localhost:5000/login', {
        headers : {
            'Content-type' : 'application/json'
        },
        method : 'POST',
        body : JSON.stringify({username : username, password : password})
    })
    .then(response => response.json())
    .then(data => console.log('wtf did i do?'));
    
});