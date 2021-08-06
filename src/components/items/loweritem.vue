<template>
<div>
       <div class="top">
            <div class="lower_item_container">
                    <div class="lower_item_navbar">
                        <div class="best_deals" :class="{borders:bestDealsBorder}" v-on:click="bestDealsBorder=true,liquorsBorder=false,groceryBorder=false,childcareBorder=false,clothingBorder=false, iscustomersChoice=false,isrice=false,isbabycare=false,isliquor=false,isbestdeals=true">Best deals</div>
                        <div class="liquors" :class="{borders:liquorsBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=true,groceryBorder=false,childcareBorder=false,clothingBorder=false,iscustomersChoice=true,isrice=false,isbabycare=false,isliquor=false,isbestdeals=false">customers choice</div>
                        <div class="grocery " :class="{borders:groceryBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=false,groceryBorder=true,childcareBorder=false,clothingBorder=false,iscustomersChoice=false,isrice=true,isbabycare=false,isliquor=false,isbestdeals=false">Rice</div>
                        <div class="child_care " :class="{borders:childcareBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=false,groceryBorder=false,childcareBorder=true,clothingBorder=false,iscustomersChoice=false,isrice=false,isbabycare=true,isliquor=false,isbestdeals=false">Child Care</div>
                        <div class="clothing " :class="{borders:clothingBorder}" v-on:click="bestDealsBorder=false,liquorsBorder=false,groceryBorder=false,childcareBorder=false,clothingBorder=true,iscustomersChoice=false,isrice=false,isbabycare=false,isliquor=true,top20show=false">liquors</div>
                    </div>
        </div>
        </div>
      <div class="container">
          <div v-if="isbestdeals">
          <div class="left_mainitem">
              <div class="card" v-for="item in items.bestdeals" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name">  <strong>{{item.name}}</strong> </div>
                  <div class="image_container">
                      <div class="glass_container"></div>
                        <img :src="item.img" alt="" class="image">
                  </div>
                 
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
            </div>
          </div>

            <div v-if="isrice">
          <div class="left_mainitem">
              <div class="card" v-for="item in items.rice" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                  <div class="image_container">
                      <div class="glass_container"></div>
                        <img :src="item.img" alt="" class="image">
                  </div>
                 
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view" v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
            </div>
          </div>





        <div v-if="isbabycare">
          <div class="left_mainitem">
              <div class="card" v-for="item in items.babycare" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                  <div class="image_container">
                      <div class="glass_container"></div>
                        <img :src="item.img" alt="" class="image">
                  </div>
                 
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
            </div>
          </div>




            <div v-if="isliquor">
          <div class="left_mainitem">
              <div class="card" v-for="item in items.liquor" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                  <div class="image_container">
                      <div class="glass_container"></div>
                        <img :src="item.img" alt="" class="image">
                  </div>
                 
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                     <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
            </div>
          </div>



          <div v-if="iscustomersChoice">
          <div class="left_mainitem">
              <div class="card" v-for="item in items.customersChoice" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                  <div class="image_container">
                      <div class="glass_container"></div>
                        <img :src="item.img" alt="" class="image">
                  </div>
                 
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="middle_mainitem">
              <div class="gls"></div>
              <div class="show_checkout">
                   <div class="view"><i class="fa fa-eye hii" aria-hidden="true"></i><span>  <strong>View</strong> </span> </div>
                      <div class="wishlist"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span> <strong>Wishlist</strong> </span></div>
                  
              </div>
              <div class="middle_wrapper">
                    <div class="special_offer_tag"> <p>special <strong>offer</strong> </p> </div>

                  <div class="middle_category">Nepali Rice</div>
                  <div class="middle_name"> <strong>Janakpur rice</strong>  </div>
                  
                  <div class="img_middle">
                      <div class="glassonimage">
                          <div class="actualglass"></div>
                  <img src="./img/food-removebg-preview.png" alt="" class="middle_image">     
                  </div>
                  </div>
                  <div class="middle_extraimages">
                  <img src="./img/food-removebg-preview.png" alt="" class="extra_image"> 
                  <img src="./img/food-removebg-preview.png" alt="" class="extra_image"> 
                  <img src="./img/food-removebg-preview.png" alt="" class="extra_image"> 
                  </div>
                  <div class="cartandprice">
                  <div class="middle_price">
                      <div class="middle_originalprice">  <strong> Rs.2000</strong></div>
                      <div class="middle_oldprice">  <strong><s>Rs.1000</s></strong>  </div>
                  </div>
                  <div class="cart_icon"><i class="fa fa-cart-o"></i></div>
                  </div>
              </div>
          </div>
          <div class="right_mainitem" v-if="isbestdeals">
              <div class="card" v-for="item in items.bestdeals" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                 <img :src="item.img" alt="" class="image">
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
          </div>

         <div class="right_mainitem" v-if="iscustomersChoice">
              <div class="card" v-for="item in items.customersChoice" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                 <img :src="item.img" alt="" class="image">
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
          </div>


            <div class="right_mainitem" v-if="isrice">
              <div class="card" v-for="item in items.rice" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                 <img :src="item.img" alt="" class="image">
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
          </div>



            <div class="right_mainitem" v-if="isbabycare">
              <div class="card" v-for="item in items.babycare" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                 <img :src="item.img" alt="" class="image">
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
                  </div>
              </div>
          </div>

          <div class="right_mainitem" v-if="isliquor">
              <div class="card" v-for="item in items.liquor" :key="item.key">
                  <div class="card_glass"></div>
                  <div class="category">{{item.category}}</div>
                  <div class="name"><strong>{{item.name}}</strong></div>
                 <img :src="item.img" alt="" class="image">
                  <div class="price">{{item.price}}</div>
                  <div class="iconsdepartment">
                      <div class="view"  v-on:click="showpopup(item.category,item.name,item.price,item.oldprice,item.img)"><a href="#popup1"><i class="fa fa-eye hii" aria-hidden="true"></i><span> View</span></a> </div>
                      <div class="wishlist"  v-on:click="addwishlist(item.name)"> <a href="#popup2"><i class="fa fa-heart-o hii" aria-hidden="true"></i><span>Wishlist</span></a> </div>
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
    name:'Loweritem',
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
            return this.$store.state.ispopup[0].value
        }
    },
    data(){
      return{
         bestDealsBorder:true,
           liquorsBorder:false,
           groceryBorder:false,
           childcareBorder:false,
           clothingBorder:false,
            items:{bestdeals:[
                 {name:'Basmati Rice',category:'nepali rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'indian rice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'chinese rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Basmati Rice',category:'nepali rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'indian rice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'chinese rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                ],
                customersChoice:[
                 {name:'Basmati Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Basmati Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                ],
                rice:[
                 {name:'Basmati Rice',category:'rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Basmati Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                ],
                babycare:[
                 {name:'Basmati Rice',category:'babycare',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Basmati Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                ],

                liquor:[
                 {name:'Basmati Rice',category:'liquor',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Basmati Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                    {name:'Sona Mansuli Rice',category:'customers choice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'customers choice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                ],



                },
                midleft:{
                offercaption:'Hurry Up! offer Ends in',
                name:'Fortune Basmati Rice',
                curentPrice:'1200',
                oldPrice:'1500',
                discountPercent:'30',
                soldQuantity:50,
                availableQuantity:60,
                hours:13,
                minutes:10,
                seconds:4,
                offerColor:'#ff9a03',
                
            },
            percent:null,
            isbestdeals:true,
            iscustomersChoice:false,
            isrice:false,
            isbabycare:false,
            isliquor:false,
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
<style>
.container{
    display: flex;
    color: black;
}


.left_mainitem{
    display: grid;
    height:700px ;
    grid-template-columns: 200px 200px;
}
.image{
    height: 100px;
    width: 100px;
    /* border: 1px solid black; */
    

}
.card{
    
    width: 170px;
    height: 200px;
    box-shadow: 0px 0px 7px black;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}
.card:hover{
    box-shadow: 0px 0px 7px gray;
}
.card_glass{
    position: absolute;
    bottom: 0px;
    height: 0%;
    width: 100%;
    background-color: rgba(181, 181, 181, 0.04);
    transition: 0.2s;
}
.card:hover .card_glass{
height: 100%;
}
.image_container{
    position: relative;
}

/* .card:hover{
} */
.middle_price{
    display: flex;
   margin-left: 30%;
   font-size: 20px;
}
.middle_originalprice{
    color: #ff9a03;

}
.middle_oldprice{
    color: #860d0d;
    margin-left: 20px;
}

.middle_mainitem{
    margin-top: 100px;
    width: 300px;
    height: 500px;
    position: relative;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;
}
.right_mainitem{
     display: grid;
    height:700px ;
    grid-template-columns: 200px 200px;
    margin-left: 20px;
}
.image_container{
    position:relative;
}
.glass_container{
    position: absolute;
    height: 0%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.04);
    transition: 0.3s;
}
.card:hover .glass_container{
    height: 100%;
}
.iconsdepartment{
    position: absolute;
    bottom: -50px;
    left: 30%;
    transition: 0.3s;
}
.card:hover .iconsdepartment{
    bottom: 0px;
}
.iconsdepartment div{
    padding: 3px;
}
.view:hover .fa{
    color: orange;
}
.wishlist:hover .fa{
    color: orange;
}
.img_middle{
    display: flex;
    justify-content: center;
    align-content: center;
    
}
.middle_image{
    position: absolute;
    height: 100%;
    width: 100%;
    /* border: 1px solid tomato; */
    left: 0px;
}
.cartandprice{
    position: absolute;
    top: 80%;
}
.middle_extraimages{
    display: flex;
    position: absolute;
    top: 60%;

}
.extra_image{
    height: 80px;
    width:80px;
    margin: 10px;
}
.middle_category{
    margin-top: 30px;
}
.special_offer_tag{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: tomato;
    color: white;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
.gls{
    position: absolute;
    background-color:rgba(181, 181, 181, 0.09) ;
    height: 0%;
    width: 100%;
    bottom: 0px;
    transition: 0.3s;
}
.middle_mainitem:hover .gls{
    height: 100%;
}
.show_checkout{
    position: absolute;
    bottom: -30px;
    display: flex;
    justify-content: center;
    left: 30%;
    transition: 0.3s;

}
.middle_mainitem:hover .show_checkout{
    bottom: 20px;
}
.middle_mainitem{
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
}
.middle_mainitem:hover{
    box-shadow: 0px 0px 10px gray;
}
.glassonimage{
    position: relative;
    height: 250px;
    width: 100%;

}
.actualglass{
    position: absolute;
    height: 0%;
    width: 100%;
    background-color:rgba(181, 181, 181, 0.09) ;
    top:0px;
    transition: 0.3s;

}
.middle_mainitem:hover .actualglass{
    height: 100%;
}























    .lower_item_container {
    max-height: 184vh;
    border:none;
    display: flex;
    justify-content: center;
    }
.lower_item_navbar{
    margin-top: 30px;
    width: 100%;
    background-color:rgba(0,0,0,1);
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
}
.lower_item_navbar div{
     height: 30px;
     margin: 20px;
     cursor: pointer;
}
.lower_item_navbar .borders{
    border: 2px solid #ff9a03;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.item_collection{
  width: 100%;
  border: 1px solid gray;
  display: flex;
  justify-content: space-around;
  height: 100%;

}
/* starts flex card css */
.flex_card{
 box-shadow: 0px 0px 10px black;
 transition: 0.3s;
 border-radius: 20px;
 position: relative;
 height: 100%;
}
.card_layout{
  width: 70%;
   margin-left: 40px;
   border: 1px solid red;

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
.vcol_extra{
  width:220px!important;
  position: relative;
  left: 10px;

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
    height: 20px;
}
.glass_looks_customize{
  left: -60px;
  width: 94%;
  border: 1px solid yellow;
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
/* .col-4 {
    flex: 0 0 33.3333333333%;
    max-width: 24.333333%;
} */
.column_adjust{
  width:93%;
  position: relative;
 left: -60px;

}
.vcol_extra {
    width: 220px!important;
    position: relative;
    left: 60px;
}
.col6{
  max-width: 30%;
}
/* ends flex card css */


/* middle css */

</style>