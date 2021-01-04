
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("cancel");


btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("invite").innerHTML = "Invite Teacher";
    document.getElementById("code").innerHTML = makeid(5);
}
btn1.onclick = function () {
    modal.style.display = "block";
    document.getElementById("invite").innerHTML = "Invite Student";
    document.getElementById("code").innerHTML = makeid(5);
}
span.onclick = function () {
    modal.style.display = "none";
}
cancel.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
