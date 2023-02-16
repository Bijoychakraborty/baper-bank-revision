document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const myEmail = emailField.value;

    const userPassward = document.getElementById('user-passward');
    const setPassward = userPassward.value;

    if (myEmail === 'bijoychakraborty@gmail.com' && setPassward === 'bijoy') {
        // console.log('valid user');
        window.location.href = 'bank.html'
    } else {
        // console.log('invalid user');
        alert('You give a wrong passward');
    }
})