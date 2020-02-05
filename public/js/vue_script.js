function getRadio(str) {
    var ele = document.getElementsByName(str);
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            return ele[i].value;
        }
    }
    return null;
}


function getCheckbox(str) {
    res = [];
    var ele = document.getElementsByName(str);
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            res.push(ele[i].value);
        }
    }
    return res;
}



const vm = new Vue({
    el: '#menu',
    data: {
  	    burgers: food,
        selectedBurgers: []
    }
})

const vo = new Vue({
    el: '#order',
    data: {
        fullname: '',
        street: '',
        email: '',
        housenum: '',
        payment: '',
        gender: '',
        selectedBurgers: [],
        userInfo: []
    },

    methods: {
        submitOrder: function() {
            this.fullname = "Name: " + document.getElementById("fullname").value;
            this.street = "Street: " + document.getElementById("street").value;
            this.email = "Email: " + document.getElementById("email").value;
            this.housenum = "House#: " + document.getElementById("housenum").value;

            var paymenu = document.getElementById("paymentmethod");
            this.payment = "Payment: " + paymenu.options[paymenu.selectedIndex].value;
            this.gender = "Gender: " + getRadio('gender');

            this.userInfo = [this.fullname, this.street, this.email, this.housenum, this.payment, this.gender, this.selectedBurger];

            this.selectedBurgers = vm.selectedBurgers;
            console.log(vm.selectedBurgers);
        }
    }
})
