<template>
    <div>
        <div class="main">
            <div class="left">
                <div class="left_top">
                    <img src="./img/rice-removebg-preview.png" alt="image">
                    <div class="offer_tag">
                        <p> save <br><strong>{{midleft.discountPercent}}%</strong> </p>
                    </div>
                    <div class="special_offer_tag"> <p>special <strong>offer</strong> </p> </div>
                </div>
                <div class="left_mid">
                    <div class="left_mid_name">{{midleft.name}}</div>
                    <div class="left_mid_price">
                        <div class="current_price">
                            Rs.{{midleft.curentPrice}}
                        </div>
                        <div class="old_price">
                           <s>Rs.{{midleft.oldPrice}} </s> 
                        </div>
                    </div>

                </div>
                <div class="left_sold_indicator">
                    <div class="left_sold_text_indicator">
                        <div class="sold_quantity">
                            <p>already sold: <strong>{{midleft.soldQuantity}} </strong> </p>
                        </div>
                        <div class="available_quantity">
                            <p>available: <strong>{{midleft.availableQuantity}} </strong> </p>
                        </div>
                    </div>
                    <div class="left_sold_bar_indicator_container">
                        <div class="left_sold_bar_indicator">
                            <div class="left_sold_bar_indicator_filler" :style="{width:percent+'%'}"></div>
                        </div>
                        
                    </div>
                </div>
                <div class="left_offer_time">
                    <div class="left_offer_time_caption" :style="{color:midleft.offerColor}">
                        <p>{{midleft.offercaption}}</p>
                    </div>
                    <div class="left_offer_actual_time">
                        <div class="hours">
                            <div class="time_amplitude">{{midleft.hours}}</div>
                            <div class="time_caption">hours</div>
                        </div>
                        <div class="semicolon">:</div>
                        <div class="minutes">
                            <div class="time_amplitude">{{midleft.minutes}}</div>
                            <div class="time_caption">minutes</div>


                        </div>
                        <div class="semicolon">:</div>
                        <div class="second">
                            <div class="time_amplitude">{{midleft.seconds}}</div>
                            <div class="time_caption">seconds</div>
                        </div>
                
                </div>
                </div>
                
            <div class="wowad">
                <iframe width="400" height="150" src="https://www.youtube.com/embed/_edQd056E-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
            </div>

            </div>
            <div class="right">
                <div class="right_top" >
                    <div>
                    <div class="featured_products padding_class flex_add active" @click="featuredItems=true,topratedItems=false,onsaleItems=false">
                         
                        <div>Featured</div>
                        <div class="hover_line "></div>
                    </div>
                    </div>
                    <div class="onsale_products padding_class flex_add active"  @click="featuredItems=false,topratedItems=false,onsaleItems=true,onsaleactive=true">
                        <div>Onsale</div>
                        <div class="hover_line">
                        </div>
                            
                        
                    </div>
                    <div class="top_rated_products padding_class flex_add active"  @click="featuredItems=false,topratedItems=true,onsaleItems=false,topratedactive=true">
                        <div>Top Rated</div>
                        <div class="hover_line">
                        </div>
                    </div>
                </div>
                <div class="right_bottom">
                    
                   <v-layout class="flex_card" v-if="featuredItems">
                          <v-row >
                             <v-col v-for="item in items.featured" :key="item.key" cols='4'>
                                 <div class="vcol">
                                      <div class="offer_tag card_item" v-if="item.offerPercent">
                                    <div> <p>offer</p></div>
                                    <div> <strong>{{item.offerPercent}}%</strong> </div>
                                </div>
                                     <div class="glass_looks">
                                         <div class="glass_looks-actual-price" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"> <a href="#popup1"> <i class="fa fa-eye" aria-hidden="true"></i><span> View</span> </a> </div>
                                         <div class="glass_looks-old-price" v-on:click="addwishlist(item.name)"><a href="#popup2"> <i class="fa fa-heart-o" aria-hidden="true"></i><span>Wishlist</span> </a> </div>
                                     </div>
                             <v-card color="rgb(255, 0, 0, 0.0)" hover rounded >
                            <v-card-subtitle>{{item.category}}</v-card-subtitle>
                            <div class="image_container">
                                           <img :src='item.img' alt="" class="img">
                                      </div>
                            <v-card-title class="vcardtitle">
                                <div>{{item.name}}</div>
                                </v-card-title>
                                <div class="priceandoldpriceinsidecart">         
                            <v-card-subtitle>Rs.{{item.price}}</v-card-subtitle> 
                            <v-card-subtitle v-if="item.oldprice"><s>Rs. {{item.oldprice}}</s> </v-card-subtitle>
                             </div> 
                            </v-card>
                            </div>
                            
            </v-col>
        </v-row>
        <div class="pagination">
                
<nav data-pagination>
  <a href=# disabled><i class=ion-chevron-left></i></a>
  <ul>
    <li class=current><a href=#1>1</a></li>
    <li><a href=#2>2</a></li>
    <li><a href=#3>3</a></li>
    <li><a href=#4>4</a></li>
    <li><a href=#5>5</a></li>
    <li><a href=#6>6</a></li>
    <li><a href=#7>7</a></li>
    <li><a href=#8>8</a></li>
    <li><a href=#9>9</a></li>
    <li><a href=#10>…</a></li>
    <li><a href=#41>41</a></li>
  </ul>
  <a href=#2><i class=ion-chevron-right></i></a>
</nav>


        </div>
    </v-layout>
   
       <v-layout class="flex_card" v-if="onsaleItems">
                          <v-row class="margin_alignment">
                             
                             <v-col v-for="item in items.onsale" :key="item.key" cols='4' >
                            <div class="vcol">
                                 <div class="offer_tag card_item" v-if="item.offerPercent">
                                    <div> <p>offer</p></div>
                                    <div> <strong>{{item.offerPercent}}%</strong> </div>
                                </div>
                                
                                     <div class="glass_looks">
                                          <div class="glass_looks-actual-price" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"> <a href="#popup1"> <i class="fa fa-eye" aria-hidden="true"></i><span> View</span> </a> </div>
                                         <div class="glass_looks-old-price" v-on:click="addwishlist(item.name)"><a href="#popup2"> <i class="fa fa-heart-o" aria-hidden="true"></i><span>Wishlist</span> </a> </div>
                                         
                                     </div>

                             <v-card rounded color="rgb(255, 0, 0, 0.0)">
                                      <v-card-subtitle>{{item.category}}</v-card-subtitle>
                                      <div class="image_container">
                                           <img :src='item.img' alt="" class="img">
                                      </div>
                                      <v-card-title color="red--text" class="vcardtitle">{{item.name}}</v-card-title>
                                      <div class="priceandoldpriceinsidecart">         
                            <v-card-subtitle>Rs.{{item.price}}</v-card-subtitle> 
                            <v-card-subtitle v-if="item.oldprice"><s>Rs.{{item.oldprice}}</s></v-card-subtitle>
                    </div> 
                                      
                              </v-card>
                              </div>
            </v-col>
        </v-row>
    </v-layout>
     <v-layout class="flex_card" v-if="topratedItems">
                          <v-row>
                             <v-col v-for="item in items.toprated" :key="item.key" cols="4">
                            <div class="vcol">
                                 <div class="offer_tag card_item" v-if="item.offerPercent">
                                    <div> <p>offer</p></div>
                                    <div> <strong>{{item.offerPercent}}%</strong> </div>
                                </div>
                                     <div class="glass_looks">
                                          <div class="glass_looks-actual-price" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"> <a href="#popup1"> <i class="fa fa-eye" aria-hidden="true"></i><span> View</span> </a> </div>

                                         <div class="glass_looks-old-price"> <i class="fa fa-heart-o" aria-hidden="true"></i><span>Wishlist</span> </div>
                                     </div>
                             <v-card color="rgb(255, 0, 0, 0.0)" hover rounded>
                            <v-card-subtitle>{{item.category}}</v-card-subtitle>
                           <div class="image_container">
                                <img :src='item.img' alt="" class="img">
                            </div>

                    <v-card-title class="vcardtitle">{{item.name}}</v-card-title>
                    <div class="priceandoldpriceinsidecart">         
                            <v-card-subtitle>Rs.{{item.price}}</v-card-subtitle> 
                            <v-card-subtitle v-if="item.oldprice"><s>Rs.{{item.oldprice}}</s></v-card-subtitle>
                    </div>  
                     
               
                </v-card>
                </div>
            </v-col>
        </v-row>
    </v-layout>
                </div>
            </div>
        </div>
        
         <popup v-if="ispopup[0].value" :propsdata='propsdata'></popup>
      <wishlistpopup v-if="wishlistpop" :wishlistdata='wishlistdata'></wishlistpopup>
   
    </div>
</template>
<script>
import popup from './../utility/popup.vue'
import wishlistpopup from './../utility/wishlistpopup.vue'

export default {
    
    name:'bodyutilitycomponent',
     components:{
        popup,
        wishlistpopup,
    },
    data(){
        return{
            midleft:{
                offercaption:'Hurry Up! offer Ends in',
                name:'Fortune Basmati Rice',
                curentPrice:'1200',
                oldPrice:'1500',
                discountPercent:'30',
                soldQuantity:50,
                availableQuantity:60,
                hours:12,
                minutes:10,
                seconds:10,
                offerColor:'#ff9a03',
            },
            percent:null,
             items:{featured:[
                 {name:'Basmati Rice',category:'nepali rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'nepali brown rice',price:'3000',img:require('./img/download-removebg-preview.png'),key:'2'},
                { name:'Huggies diaper',category:'baby diaper',price:'100',oldprice:'150',img:require('./img/baby-diaper-500x500-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Musuro Daal',category:'Daal',price:'2100',img:require('./img/download-removebg-preview (1).png'),key:'4'},
                { name:'8848 Vodka',category:'nepali vodka',price:'1800',oldprice:'2000',img:require('./img/download__1_-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'Canvas wine',category:'Wine',price:'700',img:require('./img/download__2_-removebg-preview.png'),key:'6'},
                
                    ],
             onsale:[
               { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                { name:'Sona Mansuli Rice',category:'white rice',price:'3000',oldprice:'2500',img:require('./img/download-removebg-preview.png'),key:'9'},
                { name:'Jeera Masino Rice',category:'brown rice',price:'1000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'10'},
                {name:'Safya Sunflower oil',category:'sunflower oil',price:'2000',oldprice:'2100',img:require('./img/download__3_-removebg-preview.png'),key:'11'}
                ],
                toprated:[
              {name:'Musuro Daal',category:'Daal',price:'2100',img:require('./img/download-removebg-preview (1).png'),key:'4'},
                { name:'8848 Vodka',category:'nepali vodka',price:'1800',oldprice:'2000',img:require('./img/download__1_-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'Canvas wine',category:'Wine',price:'700',img:require('./img/download__2_-removebg-preview.png'),key:'6'},
                { name:'Nescafe Coffee',category:'Coffee',price:'500',img:require('./img/download__5_-removebg-preview.png'),offerPercent:'15',key:'15'}
                ]
             },
           featuredItems:true,
           onsaleItems:false,
           topratedItems:false,
           featureactive:false,
           onsaleactive:false,
           topratedactive:false,
           justtryactive:true,
            isShowPopup:false,
                    propsdata:{
                        category:'',
                        name:'',
                        price:'',
                        oldprice:'',
                        img:'',
                    },
                    wishlistdata:null,
                    wishlistpop:false
          

        }
    },
  beforeMount(){
      var indicatorPercent=this.midleft.soldQuantity/this.midleft.availableQuantity
      this.percent=indicatorPercent*100
      this.changeTime()
  },
  methods:{
      changeTime(){
          setInterval(() => {
              if (this.midleft.hours!=0) {
                  if (this.midleft.minutes!=0) {
                      if(this.midleft.seconds!=0){
                          this.midleft.seconds-=1
                      }
                      else{
                          this.midleft.minutes-=1
                          this.midleft.seconds=60
                      }
                  } else {
                      this.midleft.hours-=1
                          this.midleft.minutes=60
                          this.midleft.seconds=60
                  }
              } else {
                  if ( this.midleft.minutes!=0) {
                      if (this.midleft.seconds!=0) {
                          this.midleft.seconds-=1
                      } else {
                          this.midleft.minutes-=1
                          this.midleft.seconds=60
                      }
                      
                  } else {
                      if (this.midleft.seconds!=0) {
                          this.midleft.seconds-=1
                      } else {
                          this.midleft.seconds=0
                          this.midleft.offercaption="opps! this offer has ended"
                          this.midleft.offerColor="#860d0d"
                      }
                  } 
              }
          }, 1000);
      },
      showpopup(cat,name,price,oldprice,img){
            this.propsdata.category=cat
            this.propsdata.name=name
            this.propsdata.price=price
            this.propsdata.oldprice=oldprice
            this.propsdata.img=img
            this.$store.commit('gotomutant')
            
        },
        addwishlist(name){
            this.wishlistdata=name
            this.wishlistpop=true
             this.$store.commit('updatewishlist')
        },
        
  },
   computed:{
        ispopup(){
            return this.$store.state.ispopup
        }
    },
  olu(){
          this.featureactive=true,
           this.onsaleactive=false,
           this.topratedactive=false
  }
}
</script>
<style scoped>
.main{
    display: flex;
    justify-content: space-between;

}
.left{
    width: 30%;
    height: 80vh;
    border-radius: 10px;
    position: relative;
    left: 4%;
    top: 15px;
    padding-bottom: 20px;
    
}
.left[data-v-5ef14a9c] {
    width: 30%;
    height: 80vh;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.364);
    transition: 0.3s;
    cursor: pointer;
}
.left[data-v-5ef14a9c]:hover{
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.289);
   

}
.left[data-v-5ef14a9c]:hover .left_top{
    transform: scale(1.05);
}

.left_top{
    height: 50%;
    width: 100%;
    /* border: 1px solid red; */
    position: relative;
    transition: 0.2s;
}
.left_top img{
    height: 80%;
    width: 50%;
    position: absolute;
    bottom: 0px;
    right: 25%;
    transition: 0.2s;
}
.left_top img:hover{
    transform: scale(1.03);
}
.offer_tag{
    width: 70px;
    height: 70px;
    background-color: tomato;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    transition: 0.3s;
}
.offer_tag:hover{
    background-color:white ;
    color:black

}
.special_offer_tag{
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 20px;
    color: white;
}
.left_mid{
    font-size: 20px;
    font-weight: 600;
}
.left_mid_price{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 18px;
    

}
.left_mid_name{
    color: white;
    margin-bottom: 10px;
}

.left_mid_price .current_price{
    color: #ff9a03;
    padding-right: 10px;

}
.left_mid_price .old_price{
    color: #860d0d;
    padding-left: 10px;
}
.left_sold_text_indicator{
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: 600;
    padding: 0px 15px;
}
.left_sold_bar_indicator_container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.left_sold_bar_indicator{
    height: 25px;
    width: 80%;
    background-color:  #ffffff26 ;
    border-radius: 20px;
    
}
.left_sold_bar_indicator_filler{
    height: 100%;
    background-color:#000000de ;
    border-radius: 20px;

}
.left_offer_time{
    margin-top: 40px;
}
.left_offer_actual_time{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -20px;
}
.left_offer_time_caption{
    font-size: 20px;
    /* color: #ff9a03; */
    top:-30px;
    position: relative;
}
.time_amplitude{
    color: black;
    background-color:#ffffff26 ;
    padding: 20px;
    border-radius: 5px;
    font-weight: 600;

}
.semicolon{
    font-size: 35px;
    font-weight: 600;
    margin-top: -20px;
    color:black;
    
}
.time_caption{
    color:#860d0d;
    font-size: 20px;
}
.right_top{
    display: flex;
    justify-content: center;
   border-bottom: 1px solid rgba(118, 118, 118,0.4);
   color: white;
   font-weight: 300;
   font-size: 20px;
}
.right{
position: relative;
right:10%;
top:15px;
width: 55%;
}
.flex_add{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    margin-bottom: 0px;
    transition:0.3s

}
.padding_class{
    padding: 0px 40px;
}
.hover_line{
    height: 2px;
    width: 10%;
    background-color: #ff9a03;
    transition: 0.3s;
    margin-top: 10px;
    
}
.flex_add:hover .hover_line{
    width: 100%;
    background-color: tomato;
}
.flex_add:hover{
    color:tomato;
}
.flex_card{
 box-shadow: 0px 0px 10px black;
 transition: 0.3s;
 border-radius: 20px;
 position: relative;
}
.img{
   height: 100px;
   width: 100px;
   position: relative;
}
.vcol{
    transition: 0.5s;
    position: relative;
}
.glass_looks{
background-color: rgba(255, 255, 255, 0.04);
width: 100%;
position: absolute;
height: 0%;
bottom: 0px;
transition: 0.1s;
display: flex;
justify-content: center;
}
.vcol:hover .glass_looks{
    height: 100%;
}
.image_container{
   position: relative;
 
}
.image_container::before{
    content: '';
    background-color:rgba(255, 255, 255, 0.04) ;
    position: absolute;
   height: 0%;
   width: 100%;
   left: 0;
   top: 0;
   transition: 0.5s;

}
.vcol:hover .image_container::before{
    height: 100%;
}
.vcardtitle{
    display: flex;
    justify-content: center;
    margin-top: -20px;
}
.priceandoldpriceinsidecart{
    display: flex;
    position: relative;
    top: -20px;
    justify-content: center;

}
.glass_looks div{
    padding: 10px;
    display: none;
    z-index: 20;
    cursor: pointer;
}
.glass_looks-actual-price,.glass_looks-old-price{
    color: black;
    
}
.glass_looks-actual-price i,.glass_looks-old-price i{
  transition: 0.3s;
}
.glass_looks-actual-price:hover i,.glass_looks-old-price:hover i{
    color:  #ff9a03;
}
.vcol:hover .glass_looks div{
    display: block;
    position: relative;
    top: 85%;
}

.card_item{
    position: absolute;
    left: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;

}
.pagination{
    position: absolute;
    bottom:15px;
    left: 10%;
    font-size: 40px;
}
.flex_card[data-v-5ef14a9c] {
    box-shadow: 0px 0px 10px black;
    transition: 0.3s;
    border-radius: 20px;
    position: relative;
    padding-bottom: 100px;
}
.wowad{
    position: absolute;
    bottom: -170px;
}
.active{
    color:#ff9a03;
}
.justtry{
    height: 20px;
    width: 40px;
    background-color: transparent;
   position: relative;
   top: 20px;
   width: 100%;
}




[data-pagination],
[data-pagination] *,
[data-pagination] *:before,
[data-pagination] *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
[data-pagination] {
  font-size: 8pt;
  line-height: 1;
  font-weight: 400;
  font-family: 'Open Sans', 'Source Sans Pro', Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Myriad Pro', 'Segoe UI', Myriad, Helvetica, 'Lucida Grande', 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
  margin: 1em auto;
  text-align: center;
  transition: font-size .2s ease-in-out;
}
[data-pagination] ul {
  list-style-type: none;
  display: inline;
  font-size: 100%;
  margin: 0;
  padding: .5em;
}
[data-pagination] ul li {
  display: inline-block;
  font-size: 100%;
  width: auto;
  border-radius: 3px;
}
[data-pagination] > a {
  font-size: 140%;
}
[data-pagination] a {
  color: #777;
  font-size: 100%;
  padding: .5em;
}
[data-pagination] a:focus,
[data-pagination] a:hover {
  color: green;
}
[data-pagination] li.current {
  background: rgba(0, 0, 0, 0.44)
}
/* Disabled & Hidden Styles */
[data-pagination] .disabled,
[data-pagination] [hidden],
[data-pagination] [disabled] {
  opacity: .5;
  pointer-events: none;
}
@media (min-width: 350px) {
  [data-pagination] {
    font-size: 10pt;
  }
}
@media (min-width: 500px) {
  [data-pagination] {
    font-size: 12pt;
  }
}
@media (min-width: 700px) {
  [data-pagination] {
    font-size: 14pt;
  }
}
@media (min-width: 900px) {
  [data-pagination] {
    font-size: 16pt;
  }
}

</style>