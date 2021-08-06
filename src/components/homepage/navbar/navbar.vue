<template>
<div class="navbar">
  <lowestnavbar/>
    <lowernavbar/>
    <uppernavbar/>
    
</div>

</template>
<script>
import uppernavbar from './uppernavbar'
import lowernavbar from './lowernavbar'
import lowestnavbar from './lowestnavbar'

export default{

  name:'navbar',
  components: 
  { uppernavbar,
     lowernavbar ,
     lowestnavbar
  },
    
    
}
</script>
<style scoped >
.navbar{
 height: 25vh;
 background-color: black;
  /* background-image:linear-gradient(#050018, #006747FF); */
  top: -10px;
}

</style>