
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



'use strict';
const socket = io();
const vm = new Vue({
    el: '#menu',
    data: {
  	    burgers: food,
        selectedBurgers: []
    }
});

const vo = new Vue({
    el: '#order',
    data: {
        fullname: '',
        email: '',
        payment: '',
        gender: '',
        selectedBurgers: [],
        userInfo: [],
        orders: {},
        target: {x: 0, y: 0},
        orderNum: 1
    },

    methods: {

        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },

        displayOrder: function(event) {
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            this.target.x = event.clientX - 10 - offset.x;
            this.target.y = event.clientY - 10 - offset.y;
        },

        addOrder: function() {
            socket.emit('addOrder', {
                orderId: this.orderNum,
                details: {
                    x: this.target.x,
                    y: this.target.y,
                },
                orderItems: vm.selectedBurgers
            });
            this.orderNum = this.orderNum + 1;

            console.log(this.target);
            this.fullname = "Name: " + document.getElementById("fullname").value;
            this.email = "Email: " + document.getElementById("email").value;

            var paymenu = document.getElementById("paymentmethod");
            this.payment = "Payment: " + paymenu.options[paymenu.selectedIndex].value;
            this.gender = "Gender: " + getRadio('gender');

            this.userInfo = [this.fullname, this.street, this.email, this.housenum, this.payment, this.gender, this.selectedBurger];

            this.selectedBurgers = vm.selectedBurgers;
        },

    }

});
