/*
let myButton = document.getElementById('makeOrder');

function getGender() {
    var ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            return ele[i].value;
        }
    }
    return null;
}

myButton.onclick = function () {
    var fullname = document.getElementById("fullname").value;
    var street = document.getElementById("street").value;
    var email = document.getElementById("email").value;
    var housenum = document.getElementById("housenum").value;
    var paymenu = document.getElementById("paymentmethod");
    var payment = paymenu.options[paymenu.selectedIndex].value;

    var gender = getGender();

    var userData = [fullname, street, housenum, email, payment, gender];
    console.log(userData);
}
*/
