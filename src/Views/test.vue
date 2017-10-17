<template>
  <div >
   
    <h1> {{ mess }}</h1>
    <h1> test</h1>
     <button @click='test' >test </button>
     <router-link :to="'/test/1'" class="">link</router-link>
     <router-link :to="'/test'" class="">link</router-link>
  </div>
</template>

<script lang='ts'>
//official vue class component usage via vue property decorator

//import { Component,  prop, watch } from 'vue-class-decorators';
import { RouterOptions, Location, RouteConfig, Route } from 'vue-router'
import { Component, Inject, Model, Prop, Vue,Watch  } from 'vue-property-decorator'

@Component({ name:"test" })  //alternatively you put class name
export default class extends Vue {
  
  mess:string = 'message'
    @Prop()
    propA: number;

    @Watch('$route.path', { immediate:true})  
    onChildChanged(val: string, oldVal: string) 
    { //this.$route.
      console.log("watch call "+val);
    }  

   test():void{ 
     alert('hi there');
     this.mess = 'new message';
     }
 
   mounted() {
   console.log('tst mounted and'+ this.mess);
   //this.mess
   }

    created() { 
    this.mess = ' tst created';
    console.log('tst created');
  }
  
} 
  </script>