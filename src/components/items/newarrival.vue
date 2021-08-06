<template>
<div class="cont">
     <div class="newarrivals">
          <div class="newarrivalslogo"> <strong>New Arrivals</strong>  </div>
      </div>
  <div class="greatgrandparent">
     
    <VueSlickCarousel
    :dots= 'false'
  :infinite= 'true'
  :initialSlide= 2
  :speed= 500
  :slidesToShow= 6
  :slidesToScroll= 1
  :swipeToSlide= true
  class="grandparent"
    >
      <div v-for="i in dta.newarrival" :key="i.key" class="cardo">
           
          <div class="parent">
              <div class="viewandwishlisticon">
                        <div  class="icoon"> <i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span> </div>
                         <div class="icoon"> <i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span> </div>
                        </div>
            <div class="glass_looks">
                        
            </div>
              <div class="category">{{i.category}}</div>
              <div class="img"> 
                  <div class="transparent_glass"></div>
                  <img :src=i.img alt=""> </div>
              <div class="name"> <strong>{{i.name}}</strong> </div>
              <div class="newprice">Rs.{{i.price}}</div>
              <div class="oldprice" v-if="i.oldprice">  <s>Rs.{{i.oldprice}}</s> </div>
          </div>
      </div>
    </VueSlickCarousel>
  </div>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// import popup from './../utility/popup.vue'

 
  export default {

    name: 'newarrival',
    components: { VueSlickCarousel },
  
    data(){
        return{

dta:{newarrival:[
                 {name:'Safya Sunflower oil',category:'sunflower oil',price:'2000',oldprice:'2100',img:require('./img/download__3_-removebg-preview.png'),key:'11'},
                       { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                { name:'Sona Mansuli Rice',category:'white rice',price:'3000',oldprice:'2500',img:require('./img/download-removebg-preview.png'),key:'9'},
                { name:'Jeera Masino Rice',category:'brown rice',price:'1000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'10'},
                { name:'Johnson Baby Moisturizer',category:'Moisturizer',price:'2000',oldprice:'2500',img:require('./img/jns_381371177042_cottontouch_newborn_face_and_body_lotion_400ml_00000_1000wx1000h-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Baby milk bottle',category:'milk bottle',price:'2100',img:require('./img/download__12_-removebg-preview.png'),key:'4'},
                { name:'Baby Swing',category:'Swing',price:'3000',oldprice:'4000',img:require('./img/baby-swing-500x500-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'Basmati Rice',category:'nepali rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
               {name:'Old Durbar black Chimney',category:'whiskey',price:'2100',img:require('./img/download__8_-removebg-preview.png'),key:'4'},
                { name:'Old durbar 750ml',category:'Whiskey',price:'3000',oldprice:'4000',img:require('./img/download__9_-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'Khukuri rice',category:'Nepali Rum',price:'2100',img:require('./img/download__10_-removebg-preview.png'),key:'6'},
                {name:'branded Jeans for girls',category:'pant',price:'2000',oldprice:'2500',img:require('./img/download__13_-removebg-preview.png'),offerPercent:'10',key:'1'},
                   
                    ]}
  }
        }
    }
     
</script> 
<style scoped>
.greatgrandparent{
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}
.grandparent{
    margin-top: 20px;
    height: 100vh;
    width: 90%;
}
.parent{
    height: 300px;
    width: 170px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.529);
    border-bottom: 2px solid rgba(0, 0, 0, 0.33);
    border-top: 2px solid rgba(0, 0, 0, 0.33);
    padding-left: -20px;
    position: relative;
    padding: 10px 0px;
    cursor: pointer;
}
.cardo{
position: relative;

}
.img{
    margin-top: 10px;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
}
.transparent_glass{
    position: absolute;
    background-color:rgba(255, 255, 255, 0.04);
    height: 0%;
    width: 100%;
    top: 0px;
    transition: 0.4s;
}
.parent:hover .transparent_glass{
    height: 100%;
}
.img img{
    position: absolute;
    height: 100%;
    width: 70%;
}

.glass_looks{
    position: absolute;
    height: 0%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.09);
    bottom: 0px;
    transition: 0.1s;

}
.parent:hover .glass_looks{
    height: 100%;
}
.viewandwishlisticon{
    position: absolute;
    bottom: 10px;
    left: 32%;
}

.name{
    margin-top: 40px;
}
.newarrivals{
    height: 70px;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color:#ff9a03 ;
    border-bottom: 2px solid gray;
  
}
.newarrivalslogo{
    margin-left: 30px;
    border-bottom: 2px solid #ff9a03 ;

}
.cont{
    margin-top: -20px;
}
</style>