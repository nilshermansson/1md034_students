const vm = new Vue({
    el: '#myID',
    data: {
        arbitraryVariableName: 'Välj en burgare!',
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
