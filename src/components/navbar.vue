<template>
    <div>

   <nav class="navbar navbar-default" v-bind:class="{'navbar-inverse' : inverted}">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
      
       <h1> {{inverted}} /</h1>  <h1> {{someother}} nJOJOame</h1> 
      
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li v-for="link in links" >
                     <router-link :to="link.path">{{link.name}}</router-link>
                    <!-- ROUTERLINK IS THE TRICK <a :href="link.path"></a></li>-->
                </li>
            </ul>
        </div><!-- /.navbar-collapse  v-bind:class="{'active' : $route.path == link.path}"-->
    </div><!-- /.container-fluid -->
</nav>
</template>
<script>
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
            new Link('type separate', '/ts')
      ]
   // @Watch('$route.path')
   
     @Watch<navbar, string>( function(this, newVal?:any, oldVal?:any ){ // this.$route.path:string , newVal?:any, oldVal?:any 
         if(this.$route.path!=undefined)
         console.log('Changed current path to: ' + this.$route.path);
     })
     '$route.path'
      // accessor is `computed`
  //  get route() {
    //    return 'asd';
   // }
    //route = this.$route.path;
    ready(){
        console.log(this.object.default+ this.$route.path);
    }
}
</script>