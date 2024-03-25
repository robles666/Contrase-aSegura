function generatePassword() {
    var length = parseInt(document.getElementById("length").value);
    var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?-=[]\;,./';
    var password = '';
    var max = characters.length - 1;

    if (length < 6 || length > 20 || isNaN(length)) {
        alert("La longitud de la contraseña debe estar entre 6 y 20 caracteres.");
        return;
    }

    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * max));
    }

    var passwordField = document.getElementById("password");
    passwordField.innerText = "Contraseña Generada: " + password;
    document.getElementById("copyButton").style.display = "inline";
    document.getElementById("clearButton").style.display = "inline";
}

function copyPassword() {
    var passwordField = document.getElementById("password");
    var range = document.createRange();
    range.selectNode(passwordField);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Contraseña copiada al portapapeles.");
}

function clearPassword() {
    var passwordField = document.getElementById("password");
    passwordField.innerText = "";
    document.getElementById("copyButton").style.display = "none";
    document.getElementById("clearButton").style.display = "none";
}
