<template>
  
  <div class="input-group date">
    <input type="text" class="form-control"
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        data-date-format="dd.mm.yyyy"   
          >    
    <span class="input-group-addon"> <i class="fa fa-calendar"></i></span>
  </div>

</template>
<script lang="ts">
import  {Component, create, getHelper,Vue,Vuex, Prop, Watch,Lifecycle,p }  from '../../ext1'
import  store  from '../../System/store'
 var { getters, commit } = getHelper(store)
require("bootstrap-datepicker");
require("../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.cs.min.js");
require("../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.de.min.js");
require("../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min.js");
require("../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.hu.min.js");
require("../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.nl.min.js");
require("../../../node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.pl.min.js");
//how this paret child magic works you can read here
// http://stackoverflow.com/questions/40915436/vuejs-update-parent-data-from-child-component


 @Component({
      name: 'calendar'//, //components:{ piker: require("bootstrap-datepicker")
    // }
 })
export default class extends Vue {

  name = 'calendar'
  @Vuex v  = getters('vars')
  //result1 = null 
  @Prop value = p({
   type: String,
      default: ''
   
  })

 @Lifecycle mounted() {
       //here you show the alert
      var format = 'dd.mm.yyyy'
      let self = this;
        let args = {
          language: this.v.lang,
          todayBtn: "linked",
          autoclose: true,
          todayHighlight: true
        }; 
       
          this.$nextTick(()=> {
              $(this.$el).datepicker(args).on('changeDate',
                   (e:any)=>{
                var date = e.format(format);
                var sval:string = e.currentTarget.__vue__.$refs.input._value;
                 //console.log(sval);               
               //so that value doesnt get erased everytime i put one character there, wait to have more
               if(sval.length>2){ 
                 self.updateValue(date); this.log('update '+date+sval);
                 }
            }).on('hide', function(e:any) {//catching click here
                var date = e.format(format);
                var sval:string = e.currentTarget.__vue__.$refs.input._value;            
                 self.updateValue(date); self.log('update2 '+date+sval);              
            });
          });            
    }

    updateValue (value:string) {  
       this.$emit('input', value);
     //  this.log('kick me if this works')      
       // console.log('setting value'+value)
    }
 
}
</script>
<style lang="stylus">
  @import "../../../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.standalone.min.css"; 
  @import "../../../node_modules/font-awesome/css/font-awesome.min.css" ;
  </style>