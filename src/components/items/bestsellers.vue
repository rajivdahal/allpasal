<template>
    <div>
        <div class="top">
            <div class="bestseller_logo">
                <h3>Bestseller</h3>
            </div>
            <div class="lower_item_container">
                    <div class="lower_item_navbar">
                        <div class="best_deals" :class="{borders:bestDealsBorder}" v-on:click="bestDealsBorder=true,liquorsBorder=false,groceryBorder=false,childcareBorder=false,clothingBorder=false, liquorsshow=false,groceryshow=false,childcareshow=false,clothingshow=false,top20show=true">Top 20</div>
                        <div class="liquors" :class="{borders:liquorsBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=true,groceryBorder=false,childcareBorder=false,clothingBorder=false,liquorsshow=true,groceryshow=false,childcareshow=false,clothingshow=false,top20show=false">liquors</div>
                        <div class="grocery" :class="{borders:groceryBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=false,groceryBorder=true,childcareBorder=false,clothingBorder=false,liquorsshow=false,groceryshow=true,childcareshow=false,clothingshow=false,top20show=false">Grocery</div>
                        <div class="child_care" :class="{borders:childcareBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=false,groceryBorder=false,childcareBorder=true,clothingBorder=false,liquorsshow=false,groceryshow=false,childcareshow=true,clothingshow=false,top20show=false">Child Care</div>
                        <div class="clothing" :class="{borders:clothingBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=false,groceryBorder=false,childcareBorder=false,clothingBorder=true,liquorsshow=false,groceryshow=false,childcareshow=false,clothingshow=true,top20show=false">Clothing</div>
            </div>    
        </div>
        </div>
        <div class="bottom">
            <div class="bottom_container">
                <div class="bottom_upper" v-if="top20show">
                <div class="bottom_card"  v-for="item in items.top20" :key="item.key">
                    <div class="viewandwishlisticon">
                        <div  class="icoon" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"> <a href="#popup1"> <i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                         <div class="icoon" v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true" > </i><span>Wishlist</span> </a>  </div>
                    </div>
                    <div class="glass_looks">
                        
                    </div>
                    <div class="bottom_card_left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="bottom_card_right">
                        
                        <div class="bottom_card_right_category">{{item.category}}</div>
                        <div class="bottom_card_right_name"> <strong>{{item.name}}</strong> </div>
                        <div class="bottom_card_right_price">Rs.{{item.price}}</div>
                        <div class="bottom_card_right_oldprice" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                    </div>
                </div>
                </div>
                <div class="bottom_upper" v-if="liquorsshow">
                <div class="bottom_card"  v-for="item in items.liquors" :key="item.key">
                    <div class="viewandwishlisticon">
                        <div class="icoon" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"> <a href="#popup1"> <i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a></div>
                         <div class="icoon" v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true" > </i><span>Wishlist</span> </a> </div>
                        </div>
                    <div class="glass_looks">
                        
                    </div>
                    <div class="bottom_card_left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="bottom_card_right">
                        <div class="bottom_card_right_category">{{item.category}}</div>
                        <div class="bottom_card_right_name"> <strong>{{item.name}}</strong> </div>
                        <div class="bottom_card_right_price">Rs.{{item.price}}</div>
                        <div class="bottom_card_right_oldprice" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                    </div>
                </div>
                </div>

                <div class="bottom_upper" v-if="groceryshow">
                <div class="bottom_card"  v-for="item in items.grocery" :key="item.key">
                    <div class="viewandwishlisticon">
                        <div class="icoon" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"> <a href="#popup1"> <i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                         <div class="icoon" v-on:click="addwishlist(item.name)">  <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true" > </i><span>Wishlist</span> </a>  </div>
                        </div>
                    <div class="glass_looks">
                        
                    </div>
                    <div class="bottom_card_left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="bottom_card_right">
                        <div class="bottom_card_right_category">{{item.category}}</div>
                        <div class="bottom_card_right_name"> <strong>{{item.name}}</strong> </div>
                        <div class="bottom_card_right_price">Rs.{{item.price}}</div>
                        <div class="bottom_card_right_oldprice" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                    </div>
                </div>
                </div>


                <div class="bottom_upper" v-if="childcareshow">
                <div class="bottom_card"  v-for="(item,index) in items.childcare" :key="index">
                    <div class="viewandwishlisticon">
                        <div class="icoon" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)">  <a href="#popup1"> <i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a></div>
                         <div class="icoon" v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true" > </i><span>Wishlist</span> </a> </div>
                        </div>
                    <div class="glass_looks">
                        
                    </div>
                    <div class="bottom_card_left">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="bottom_card_right">
                        <div class="bottom_card_right_category">{{item.category}}</div>
                        <div class="bottom_card_right_name"> <strong>{{item.name}}</strong> </div>
                        <div class="bottom_card_right_price">Rs.{{item.price}}</div>
                        <div class="bottom_card_right_oldprice" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                    </div>
                </div>
                </div>


                <div class="bottom_upper" v-if="clothingshow">
                <div class="bottom_card"  v-for="item in items.clothing" :key="item.key">
                    <div class="viewandwishlisticon">
                        <div class="icoon" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)" href="">  <a href="#popup1"> <i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a></div>
                         <div class="icoon" v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true" > </i><span>Wishlist</span> </a> </div>
                    </div>
                    <div class="glass_looks">
                        
                    </div>
                    <div class="bottom_card_left">
                        <img :src="item.img" alt="" >
                    </div>
                    <div class="bottom_card_right">
                        <div class="bottom_card_right_category">{{item.category}}</div>
                        <div class="bottom_card_right_name"> <strong>{{item.name}}</strong> </div>
                        <div class="bottom_card_right_price">Rs.{{item.price}}</div>
                        <div class="bottom_card_right_oldprice" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                    </div>
                </div>
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
    name:'bestsellers',
    components:{
        popup,
        wishlistpopup,
    },
    methods:{
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
    data(){
        return{
           bestDealsBorder:true,
           liquorsBorder:false,
           groceryBorder:false,
           childcareBorder:false,
           clothingBorder:false,
            items:{top20:[
                 {name:'Basmati Rice',category:'nepali rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                           { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                { name:'Sona Mansuli Rice',category:'white rice',price:'3000',oldprice:'2500',img:require('./img/download-removebg-preview.png'),key:'9'},
                { name:'Jeera Masino Rice',category:'brown rice',price:'1000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'10'},
                {name:'Safya Sunflower oil',category:'sunflower oil',price:'2000',oldprice:'2100',img:require('./img/download__3_-removebg-preview.png'),key:'11'},
                       { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                { name:'Sona Mansuli Rice',category:'white rice',price:'3000',oldprice:'2500',img:require('./img/download-removebg-preview.png'),key:'9'},
                { name:'Jeera Masino Rice',category:'brown rice',price:'1000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'10'},
                    ],
                    liquors:[
                 {name:'Arna Beer',category:'Beer',price:'500',oldprice:'650',img:require('./img/download__6_-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Tuborg Beer',category:'Beer',price:'3000',img:require('./img/download__7_-removebg-preview.png'),key:'2'},
                { name:'Jack Denials',category:'Whisky',price:'2000',oldprice:'2500',img:require('./img/jack_daniels__79730.1451544603-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Old Durbar black Chimney',category:'whiskey',price:'2100',img:require('./img/download__8_-removebg-preview.png'),key:'4'},
                { name:'Old durbar 750ml',category:'Whiskey',price:'3000',oldprice:'4000',img:require('./img/download__9_-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'Khukuri rice',category:'Nepali Rum',price:'2100',img:require('./img/download__10_-removebg-preview.png'),key:'6'},
                
                    ],
                     grocery:[
                 {name:'Horlicks 1KG',category:'Stamina and imunity',price:'2000',oldprice:'2500',img:require('./img/a5913dc0c0417020c74bfe1430459ccd-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'daal',price:'3000',img:require('./img/rice-removebg-preview.png'),key:'2'},
                { name:'Bourn Vita',category:'Cadburry bourn vita',price:'2000',oldprice:'2500',img:require('./img/cadbury-bournvita-chocolate-health-drink-500x500-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Marci Rice',category:'mustard oil',price:'2100',img:require('./img/food-removebg-preview.png'),key:'4'},
                { name:'Isolate Whey protein',category:'Whey protein',price:'3000',oldprice:'4000',img:require('./img/712C7yc9wML._AC_SL1500_-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:' Everest Meat Masala',category:'Meat masala',price:'2100',img:require('./img/download__11_-removebg-preview.png'),key:'6'},
                
                    ],
                    childcare:[
                 { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                   { name:'Huggies diaper',category:'baby diaper',price:'100',oldprice:'150',img:require('./img/baby-diaper-500x500-removebg-preview.png'),offerPercent:'30',key:'3'},
                { name:'Johnson Baby Moisturizer',category:'Moisturizer',price:'2000',oldprice:'2500',img:require('./img/jns_381371177042_cottontouch_newborn_face_and_body_lotion_400ml_00000_1000wx1000h-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Baby milk bottle',category:'milk bottle',price:'2100',img:require('./img/download__12_-removebg-preview.png'),key:'4'},
                { name:'Baby Swing',category:'Swing',price:'3000',oldprice:'4000',img:require('./img/baby-swing-500x500-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'Teddy bear',category:'Teddy',price:'2100',img:require('./img/839862ade19537c7ab7b0b27b963dd9f-removebg-preview.png'),key:'6'},
                
                    ],
                    clothing:[
                 {name:'branded Jeans for girls',category:'pant',price:'2000',oldprice:'2500',img:require('./img/download__13_-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Mens Crocodile Tshirt',category:'tshirt',price:'3000',img:require('./img/download__14_-removebg-preview.png'),key:'2'},
                { name:'Gym Costume',category:'Gym and fitness',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Marci Rice',category:'shoes',price:'2100',img:require('./img/food-removebg-preview.png'),key:'4'},
                { name:'krishnabhog Rice',category:'onepiece',price:'3000',oldprice:'4000',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'5'},
                {name:'hareram Rice',category:'lehenga',price:'2100',img:require('./img/food-removebg-preview.png'),key:'6'},
                    ]
                    },
                    top20show:true,
                    liquorsshow:false,
                    groceryshow:false,
                    childcareshow:false,
                    clothingshow:false,
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
    }
}
</script>
<style scoped>
.top{
    display: flex;
    justify-content: space-between;
    background-color: black;
    padding:0px 30px ;
}
.lower_item_container{
    border: none;
    
}
.bestseller_logo{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#ff9a03 ;
}
.bottom_upper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.bottom_lower{
    display: flex;
    justify-content: center;
}
.bottom_card{
    height: 150px;
    min-width: 300px;
    max-width: 300px;
    position: relative;
    box-shadow: 0px 0px 4px black;
    border-bottom: 1px solid black;
    display: flex;
    margin: 0px 10px;
    cursor: pointer;
    overflow: hidden;
}
.bottom_card_left img{
    height: 100px ;
    width: 100px;
}
.bottom_card_right{
    margin: 10px 0px;
}
.bottom_card_left{
    margin: 10px 0px;
}
.bottom_card_right div{
    padding: 10px 0px;
}
.bottom_card_right{
    color: black;
    padding-right: 10px;
   
}
.glass_looks{
    position: absolute;
    height: 0%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.111);
    bottom: 0px;
    transition: 0.1s;

}
.glass_looks div{
    border: 2px solid red;
}
.bottom_card:hover .glass_looks{
    height: 100%;
}
.bottom_card_left{
    position: relative;
}
.bottom_card_left::before{
    content: '';
    height: 0%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color:rgba(255, 255, 255,0.05) ;
    z-index: 10;
    transition: 0.2s;
}
.bottom_card:hover .bottom_card_left::before{
    height: 100%;
}
.viewandwishlisticon{
    position: absolute;
    font-size: 14px;
    transition: 0.2s;
    height: 0px;
    bottom: 10px;
    right: 10px;
}
.bottom_card:hover .viewandwishlisticon{
   color:black;
    height: 35%;
}
.viewandwishlisticon div{
    margin: 10px;
    transition: 0.3s;
    z-index: 100;
    position: relative;


}
.hii{
    transition: 0.1s;
}
.icoon:hover .hii{

    color: #ff9a03;
}





a{
    text-decoration: none;
}
</style>