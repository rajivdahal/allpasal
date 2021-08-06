<template>
<div>
    <!-- <navbar/> -->
    <carousel/>
    <mainitem/>
    <!-- <footercomponent/> -->
</div>
</template>
<script>
// import navbar from './navbar/navbar.vue'
import carousel from './carousel/carousel.vue'
import mainitem from './../items/mainitembody.vue'
// import footercomponent from './footer/footer.vue'


export default {
    name:'home',
    components:{
        // navbar,
        carousel,
        mainitem,
        // footercomponent,
    },
    
}
</script>
<style scoped>

</style>