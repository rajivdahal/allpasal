<template>
  <div class="carr">
    <VueSlickCarousel :arrows="true"
      :autoplay="true" 
       :autoplaySpeed=3000
       :fade="true"
       class="carrinside"
       >
      <div><img src="https://image.freepik.com/free-vector/online-shopping-banner-template_23-2148624669.jpg"> </div>
      <div><img src="@/assets/img/carousel/img2.jpg"></div>
      <div><img src="@/assets/img/carousel/img3.jpg"></div>
      <div><img src="@/assets/img/carousel/img4.jpg"></div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'carousel',
    components: { VueSlickCarousel },
  }
</script> 
<style scoped>
.carr{
  border-top: 2px solid gray;
  border-block: 2px solid gray;
  box-shadow: 0px 0px 40px black;
}

.carrinside{
  height:200px;
  z-index: 2;
}
.carrinside div img{
  height:200px;
  width:100%;
}
.carrinside div::before{
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(1, 39, 1, 0.385);
  top: 0;
  left: 0;
  opacity: 0.5;
}


</style>

