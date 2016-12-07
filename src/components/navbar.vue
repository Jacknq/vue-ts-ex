<template>
    <nav class="navbar navbar-dark bg-inverse navbar-fixed-top">
        <div class="container-fluid">
        <input type="checkbox" id="navbar-toggle-cbox" v-model="expanded" >
    
            <label for="navbar-toggle-cbox" class="navbar-toggler hidden-lg-up" type="button"
             data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header"
            aria-expanded="false" aria-label="Toggle navigation"> <span class="mico"></span></label>
        </input>
        <div class="collapse navbar-toggleable-md" id="navbar-header">
            <a class="navbar-brand" href="#">Brandname</a>
            <ul class="nav navbar-nav">
                <li  v-on:click="expanded=false" class="nav-item" v-for="link in links">
                    <router-link  active-class="active"
                     exact data-toggle="collapse" data-target="navbar-header"
                     class="nav-link" :to="link.path">{{link.name}}</router-link>
                   
                </li>
            </ul>
            <form class="form-inline float-lg-right">
   <!--<multiselect
       v-bind:selected="selected"
       v-bind:options="options" :showLabels="false" :searchable='false' :allowEmpty='false'
      @select="updateSelected">
    </multiselect>-->
    <input class="form-control" type="text" placeholder="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
</form>
        </div>
         </div>
    </nav>
</template>
<script lang="ts">
import {Component, create, getHelper,Vue,Vuex, Prop, Watch }  from '../ext'

 var multiselect = require('vue-multiselect').default;
 class Link 
 { 
    name:string; 
    public path:string; constructor(name:string,path:string){ this.name = name; this.path = path; }
 }
@Component({ 
     components:{ multiselect:multiselect }  //multiselect:Multiselect 
    // watch:{ '$route.path': function(newVal?:any, oldVal?:any ){ // this.$route.path:string , newVal?:any, oldVal?:any 
    //      if(this.$route.path!=undefined)
    //      console.log('Changed current path to: ' + this.$route.path);
    //  } } 
    })
export default class navbar extends Vue {
    someprop = 'test'
    expanded:boolean = false;

     selected:string = null;
     //options:string[] = ['polo', 'trans', 'golf'];   
    
      
     someother ='seomesome'
     object:{default:string} = {default: 'Default object property!'}; //objects as default values don't need to be wrapped into functions
      links = [
          new Link('Home', '/'),
          new Link('About', '/about'),
            new Link('Typescript', '/ts')
      ]

    public updateSelected (newSelected) {
          console.log("seleted")
      this.selected = newSelected
    }
   
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
<style lang="less">
/* navbar without js*/
#navbar-toggle-cbox:checked ~ .collapse {
    display:block;
}

#navbar-toggle-cbox {
   display: none;
}

@mcolor: #f4f7fc; 

.mico{  
-webkit-box-shadow: 0px 10px 0px 1px @mcolor,0px 16px 0px 1px @mcolor,0px 22px 0px 1px @mcolor;
box-shadow:0 10px 0px 1px @mcolor,0 16px 0 1px @mcolor,0 22px 0 1px @mcolor;
display: block; 
width: 21px; 
top: -4px; 
height:0; left: 1px;
position:relative;
}

.navbar-dark .navbar-toggler {
  background-image: none !important;
  background:transparent !important;
  background-color: none !important;
  border-color: rgba(255, 255, 255, 0.1);
  -webkit-appearance:inherit  !important;
}


</style>