const form_login = document.getElementById('form_login');

form_login.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents reload page when form is submited
    
    let username = form_login.elements['username'].value; //getting form data
    let password = form_login.elements['password'].value;

    fetch('http://localhost:5000/login', {  // fetch login [0]
        headers : {
            'Content-type' : 'application/json' // indicate to server data type
        },
        method : 'POST',    // indicate to server method type
        body : JSON.stringify({username : username, password : password})   // write data
    })
    .then(response => response.json())  // send json to app.js in url/login -POST- [1]
    .then(data => loadUserData(data['data'])); // recieves data that app.js sent after get results from database in url/login -POST-, and passes it to a function for do things with it [3] -> [4]
});

function loadUserData(data){    // [4]
    if (data.length === 0){
        const form_message = document.getElementById('form_message');
        form_message.className = 'alert alert-warning';
        form_message.innerHTML = 'Los datos no coinciden';
    }
    else{
        // remove all unnecessary elements
        const btn_contact = document.getElementById('btn_contact');
        const btn_view_profile = document.getElementById('btn_view_profile');
        const btn_sign_out = document.getElementById('btn_sign_out');
        const access_container = document.getElementById('access_container');
        
        btn_contact.style.display = 'none';
        btn_view_profile.hidden = false;
        btn_sign_out.hidden = false;
        access_container.style.display = 'none';

        // place neccessary elements
        const main_container = document.getElementById('main_container');
        main_container.hidden = false;
        
        
    }
}