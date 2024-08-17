const userName = prompt('Who is there?', '');

if (userName === 'Admin') {
    const password = prompt('Password?', '');
    if (password === 'TheMaster') {
        alert('Welcome!');
    } else if(password) {
        alert('Wrong password!');
    } else {
        alert('Canceled');
    }
} else if (userName) {
    alert('I do not know you!');
} else {
    alert('Canceled');
}