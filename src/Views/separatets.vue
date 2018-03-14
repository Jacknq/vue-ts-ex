<template>
    <div>
      This one has separated Typescript.. {{someabout}}
         <multiselect v-bind:selected="selected" 
          v-bind:options="['option1','option2']" :showLabels="false"
          :searchable='true' :allowEmpty='false'  >
          </multiselect><br/>
    </div>
</template>
<script src="./separatets.ts" lang="ts"/></script>
