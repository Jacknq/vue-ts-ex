<template>
  <div   >
   
    <h1> {{ mess }}</h1>
    <h1> test</h1>
     <button @click='test' >test </button>
  </div>
</template>

<script lang='ts'>
import Vue = require('vue')
// Declare the component's type
interface MyComponent extends Vue {
  message: string
  onClick (): void
}
export default {
  id:'dynamic',
  name: 'pepa',
  data () {
    return {
      mess: 'Test me Dynamic!', message:''
    }
  },
  methods:{
    test(){ alert('etwas'); }
  },
   mounted() {
   console.log('tst mounted and'+ this.message);
    //this
   // mess = 'something else'; //will not work
    }, 
    created() {
          this.message = 'created';
    console.log('tst created');
  }
  
} as Vue.ComponentOptions<MyComponent>
  </script>