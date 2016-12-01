<template>
    <div>
        This is ABOUT template..{{someabout}}
        </br>
        <input type="text" v-model="someabout">
    </div>
</template>
<script lang="ts">
import {Component, create, getHelper,Vue,Vuex }  from '../ext'

 @Component({
      name: 'aboutname'
 })
export default class extends Vue {
    someabout = 'about'    
}
</script>