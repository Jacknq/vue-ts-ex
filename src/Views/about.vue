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
    </div>
</template>
<script lang="ts">
import  {Component, create, getHelper,Vue,Vuex, Prop, Watch,Lifecycle }  from '../ext'
 var multiselect = require('vue-multiselect').default;
//var Sortable = require('sortablejs');
//import * as $ from 'jquery'
//window.Sortable =Sortable;

 @Component({
      name: 'aboutname', components:{ multiselect }
 })
export default class extends Vue {
    someabout = 'about'  
    mselected = [];
    options = ['polo', 'trans', 'golf','jaguar', 'a6', 'tiguan', 'kadjar','ateca']; 
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
  console.log('@tag: ', value)
        this.mselected = value
        }
}
</script>