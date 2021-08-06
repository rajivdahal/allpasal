<template>
<div>
    <bodyutilitycomponent/>
    <loweritem/>
    <bestsellers/>
    <adbanner/>
    <newarrival/>
    <extrafeature/>
</div>

</template>
<script>
import bodyutilitycomponent from './bodyutilitycomponent.vue'
import loweritem from './loweritem.vue'
import bestsellers from './bestsellers.vue'
import newarrival from './newarrival.vue'
import adbanner from './adbanner.vue'
import extrafeature from './extrafeature.vue'





export default {
    name:'mainitem',
    components:{
       bodyutilitycomponent,
       loweritem,
     bestsellers,
       adbanner,
       newarrival,
       extrafeature,
       
    }
}
</script>
<style scoped>
.mainitem{
    background-color: black;
    position: relative;
    top: -25px;
    z-index: -1;
}
.lower_item_container {
    max-height: 184vh;
    border: none
    }

</style>