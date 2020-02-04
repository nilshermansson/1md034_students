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

let list = document.createElement('ul');

let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');

let txt1 = document.createTextNode(nicesize.info());
let txt2 = document.createTextNode(longboy.info());
let txt3 = document.createTextNode(veggie.info());
let txt4 = document.createTextNode(bigboy.info());
let txt5 = document.createTextNode(chicken.info());

li1.appendChild(txt1);
li2.appendChild(txt2);
li3.appendChild(txt3);
li4.appendChild(txt4);
li5.appendChild(txt5);

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
list.appendChild(li5);

document.getElementById("myID").appendChild(list);

var burgers = [nicesize, longboy, veggie, bigboy, chicken];

var list2 = document.createElement("ul");

for (var burger in burgers){
	  var li = document.createElement('li');
    var txt = document.createTextNode(x.name);
    li.appendChild(txt);
    list.appendChild(li);
}


document.getElementById("myID").appendChild(list);





