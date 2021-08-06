<template>
<div class="footer_class">
    <searchbar/>
    <!-- <payment/> -->
    <footeritem/>
</div>
</template>
<script>
// import payment from './payment.vue'
import footeritem from './footeritem.vue'
import searchbar from './searchbar.vue'
export default {
    name:'footercomponent',
    components:{
        // payment,
        footeritem,searchbar,
    }
}
</script>
<style scoped>
.footer_class{
    margin-top: 100px;
    background-color: black;
}

</style>