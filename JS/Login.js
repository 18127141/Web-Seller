const pass = document.getElementById('Password');
const icon1 = document.getElementById("eye1");
const icon2 = document.getElementById("eye2");
const username = document.getElementById("Username")
const submit = document.getElementById("submit")

function Myfunction() {
    if (pass.type === 'password') {
        pass.setAttribute('type', 'text');
        icon1.style.display = "none";
        icon2.style.display = "block";

    }
    else {
        pass.setAttribute('type', 'password');
        icon2.style.display = "none";
        icon1.style.display = "block";

    }

}
