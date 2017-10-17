<template>
   <div>

   </div>
</template>
<script lang="ts">
    import { Component, create, getHelper, Vue, Store, Prop, Watch } from '../ext1'

    var multiselect = require('vue-multiselect').default;
 
    @Component({
        components: { multiselect: multiselect }  //multiselect:Multiselect 
    name: 'compname'
    })
    export default class extends Vue {  
    
        public somemethod(newSelected) {
            console.log("enter your code")
          
        }          

    }
</script>
<!--<style lang="less" >
</style>-->