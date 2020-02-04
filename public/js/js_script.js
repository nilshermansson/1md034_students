/*
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
*/
/*
function burgerName(burger){
    let heading = document.createElement('h3');
    let txt = document.createTextNode(burger.name);
    heading.appendChild(txt);
    return heading;
}

function burgerImg(burger){
    let img = document.createElement('img');
    img.width = "300";
    img.height = "300";
    img.src = burger.source;
    return img;
}

function burgerProperties(burger){
    let list = document.createElement('ul');

    let li1 = document.createElement('li');
    let li2 = document.createElement('li');

    let kcalTxt = document.createTextNode("kCal: " + burger.kcal);
    let specialTxt = document.createTextNode(burger.special);

    li1.appendChild(kcalTxt);
    li2.appendChild(specialTxt);

    list.appendChild(li1);
    list.appendChild(li2);

    if(burger.lact){
        let li4 = document.createElement('li');
        let lactTxt = document.createTextNode("Contains Lactose");
        li4.appendChild(lactTxt);
        list.appendChild(li4);
    }

    if(burger.glut){
        let li5 = document.createElement('li');
        let glutTxt = document.createTextNode("Contains Gluten");
        li5.appendChild(glutTxt);
        list.appendChild(li5);
    }
    return list;
}

function makeBurger(burger){
    let div =  document.createElement('div');
    div.appendChild(burgerName(burger));
    div.appendChild(burgerImg(burger));
    div.appendChild(burgerProperties(burger));
    div.class="box";
    return div;
}

var burgers = [nicesize, longboy, veggie, bigboy, chicken];

for (i in burgers){
    let currentBurger = burgers[i];
    document.getElementById("menu").appendChild(makeBurger(currentBurger));
}

*/
