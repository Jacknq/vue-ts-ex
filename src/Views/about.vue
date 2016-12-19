<template>
    <div>
        This is ABOUT template..{{someabout}}
        </br>
          <multiselect v-bind:selected="selected" 
          v-bind:options="options" :showLabels="false"
          :searchable='true' :allowEmpty='false'  >
          </multiselect></br>
            some input text <input type="text" v-model="someabout">
         </br></br>
          And multi searchable</br></br>
           <multiselect v-bind:id="multi" 
            v-bind:value="mselected" 
            v-bind:options="options" 
          :showLabels="false" :searchable='true' :allowEmpty='true'
          :multiple="true" :taggable='true' @tag="addTag" @input="updateSelectedTagging"
            >
          </multiselect> 
              <br>
   <ul id="example-1">
  <li v-for="m in msg">
    {{ m }}
  </li>
</ul> <button @click.stop='test' >test</button>
    </div>

</template>
<script lang="ts" >
import  {Component, create, getHelper,Vue,Vuex, Prop, Watch,Lifecycle }  from '../ext'
 var multiselect = require('vue-multiselect').default;
 import * as fn from '../components/domain'


 @Component({
      name: 'aboutname', components:{ multiselect }
 })
export default class extends Vue {
    someabout = 'about'  
    mselected = [];
    options = ['polo', 'trans', 'golf','jaguar', 'a6', 'tiguan', 'kadjar','ateca']; 
    db : fn.SignalRDM;
    connected = false;
    msg = [];
    @Lifecycle mounted() {
       //here you show the alert
      // window.document.
    
       console.log('home mounted')      
    }  

    addTag(tag:string)
    {
        this.options.push(tag);
         this.mselected.push(tag)
    }
    updateSelectedTagging (value) {
       // console.log('@tag: ', value)
        this.mselected = value
        }
//experimental
   test () 
    {  
      var dbb : fn.SignalRDM =this.db; 
     // var tt = this;    this.                
      this.db.donorHub.findPerson('drazan').then( (res: fn.Person[]) => {
            //  this.connected = true;            
              this.msg.push(JSON.stringify(res))
              console.log('Invocation of drazan succeeded: ' + res[0].FirstName );
        })//.fail( (error: any) => {
          //      console.log('Invocation of findPerson failed. Error: ' + error);
         // });            
    }
 
  
 @Lifecycle created() {    
       
        var t = 'DHYrPKgRxwxXqYTLklPa9vnBHtKlGysgeoow7183jQelfkUfaPJfgVLTPPUejoc9XpfTqrxx92XsgGft7ml_1AYUO5RI4nSdR-eLvt5LlmL89jV90KXDxvwTb05N359kwhN3HYFTj6ESSSDMqb2e3tg2xrmiLiP4eIcwHd8N4BS38qd5BU-UEp6oWULcOhgu';
        //put your signalr server here
        this.db = new fn.SignalRDM('http://buildix/signalserv/', t);
         console.log('connection created');
        }
      @Lifecycle   destroyed(){
          if (this.db.connection !== undefined)
            { 
              this.db.connection.stop();
            }
                console.log('connection stopped');
        }   
}
</script>