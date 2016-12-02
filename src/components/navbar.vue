<template>
       <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
      <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div class="collapse navbar-toggleable-md" id="navbarResponsive">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav navbar-nav">
                <li class="nav-item" v-for="link in links">
                            <router-link active-class="active" exact  class="nav-link" :to="link.path">{{link.name}}</router-link>
                   
                        </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="responsiveNavbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline float-lg-right">
          <input class="form-control" type="text" placeholder="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
</template>
<script lang="ts">
import {Component, create, getHelper,Vue,Vuex, Prop, Watch }  from '../ext'
 class Link {
    name:string;
   public path:string;
    constructor(name:string, path:string){
        this.name = name;
        this.path = path;
    }
}
@Component({ 
    // watch:{ '$route.path': function(newVal?:any, oldVal?:any ){ // this.$route.path:string , newVal?:any, oldVal?:any 
    //      if(this.$route.path!=undefined)
    //      console.log('Changed current path to: ' + this.$route.path);
    //  } } 
    })
export default class navbar extends Vue {
    someprop = 'test'
      inverted:boolean = true;
      
      
     someother ='seomesome'
     object:{default:string} = {default: 'Default object property!'}; //objects as default values don't need to be wrapped into functions
      links = [
          new Link('Home', '/'),
          new Link('About', '/about'),
            new Link('Typescript', '/ts')
      ]
   
     @Watch<navbar, string>( function(this, newVal?:any, oldVal?:any ){ // this.$route.path:string , newVal?:any, oldVal?:any 
         if(this.$route.path!=undefined)
         console.log('Changed current path to: ' + this.$route.path);
     })
     '$route.path'
      // test is `computed`
  //  get test() {
    //    return 'asd';
   // }
    
    ready(){
        console.log(this.object.default+ this.$route.path);
    }
}
</script>