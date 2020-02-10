'use strict';
const socket = io();

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
        orders: {}
    },

    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));

        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },

  methods: {
      submitOrder: function() {
          this.fullname = "Name: " + document.getElementById("fullname").value;
          this.email = "Email: " + document.getElementById("email").value;

          var paymenu = document.getElementById("paymentmethod");
          this.payment = "Payment: " + paymenu.options[paymenu.selectedIndex].value;
          this.gender = "Gender: " + getRadio('gender');

          this.userInfo = [this.fullname, this.street, this.email, this.housenum, this.payment, this.gender, this.selectedBurger];

          this.selectedBurgers = vm.selectedBurgers;
      },
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },

  }
/*    methods: {
        }*/

});
