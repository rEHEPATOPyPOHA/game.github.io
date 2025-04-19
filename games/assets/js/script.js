// includes - проверка наличия
function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if (!email.includes('@')) alert('Where is @');
    else if (!email.includes('.')) alert('Where is DOT');
    else alert ('Good news. Alright!')
}