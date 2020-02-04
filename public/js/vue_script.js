function menuItem (name, kcal, glut, lact, special, src){
    this.name = name;
    this.kcal = kcal;
    this.glut = glut;
    this.lact = lact;
    this.special = special;
    this.source = src;
    this.info = function() {
        return this.name + ' kCal: ' + this.kcal;
    }
}

let nicesize = new menuItem("Nice Size Burger", 900, true, false, "Good value!", "https://www.burgerdudes.se/wp-content/uploads/2018/09/shadyburger_basic_burger_stefan_med.jpg");

let longboy = new menuItem("The Long Boy", 1200, true, true, "Double patties!", "https://i.ytimg.com/vi/L6yX6Oxy_J8/maxresdefault.jpg");

let veggie = new menuItem("Veggie Delight xxl", 800, false, false, "Vegan", "https://veganheaven.org/wp-content/uploads/2018/06/Cauliflower-Burger-Vegan-Super-Crispy-11-500x500.jpg");

let bigboy = new menuItem("The Big Boy", 1300, true, true, "It's big!", "https://i.pinimg.com/originals/80/40/9d/80409d8c06d21e0c0416a40c2176def3.jpg");

let chicken = new menuItem("The Chicken Nugget Burger", 850, true, false, "Contains Chicken", "https://i.pinimg.com/originals/ba/ff/d9/baffd95b284f21e019a7a07ffb9d6d7e.jpg");


const vm = new Vue({
    el: '#menu',
    data: {
  	    burgers: [nicesize, longboy, veggie, bigboy, chicken]
    }
})

/*
  HTML:
  <div id=myID>
  <h3>
  {{arbitraryVariableName}}
  </h3>
  <ul>
  <li v-for="burger in burgers">
  {{ burger.info() }}
  <b v-if="burger.glut">contains gluten</b>
  <b v-if="burger.lact">contains lactose</b>
  </li>
  </ul>
  </div>
*/
