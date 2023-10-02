document.addEventListener('DOMContentLoaded', function() {
    let signupBtn = document.getElementById('singup-btn');
    let log = document.getElementById('log');

    signupBtn.addEventListener('click', function(event) {
        event.preventDefault();
        log.style.display = 'flex';
        log1.style.display = 'none';

    });
});
document.addEventListener('DOMContentLoaded', function() {
    let signupBtn1 = document.getElementById('singup-btn1');
    let log = document.getElementById('log');

    signupBtn1.addEventListener('click', function(event) {
        event.preventDefault();
        log.style.display = 'flex';
        log1.style.display = 'none';

    });
});

let close = document.getElementById('close');
    let log = document.getElementById('log');

    close.addEventListener('click', function(event) {
        event.preventDefault();
        log.style.display = 'none';
    });
    let close1 = document.getElementById('close1');
    
    close1.addEventListener('click', function(event) {
        event.preventDefault();
        log.style.display = 'flex';
        log1.style.display = 'none';
    });
    let login= document.getElementById('login');
    let log1 = document.getElementById('log1');

    login.addEventListener('click', function(event) {
        event.preventDefault();
        log1.style.display = 'flex';
        log.style.display = 'none';

    });