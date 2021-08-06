<template>
<div  id="nav" class="sabsemain">
<div class="container">
    <div class="left">
        <div class="main-header" v-on:click="setalldepartmentvaluemethod">
            <i class="fa fa-bars" aria-hidden="true"></i>
            <span> Show All Departments</span>
        </div>
            <div class="main-header-subclass" v-if="setalldepartmentvalue">
                <div><p>Value of the day</p></div>
                <div><p>Top 100 offers</p></div>
                <div><p>New Arrivals</p></div>
                <div><p>Personal Care</p></div>
                <div><p>Baby Care</p></div>
                <div><p>Beverage</p></div>
                <div><p>Household</p></div>
        </div>
    </div>
    <div class="middle">
        <div class="pages" @mouseover="hover = true">
            <div class="page-header">
            <div>pages</div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <div class="page-open" v-if="hover && hoverpageopen" @mouseleave="hover = false">
                     <div>about us</div>
                     <div>contact us</div>
                     <div>store locator</div>
                     <div>FAQs</div>
                     <div>Terms and conditions</div>
            </div>
        </div>
        <div class="features">
            <div class="feature-header" @mouseover="hovergrocery = true" >
            <div>features</div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <div class="feature-open" v-if="hovergrocery && hoverpageopengrocery" @mouseleave="hovergrocery = false">
                <div class="grocery">
                    <div>
                        <div @mouseover="hoverpageopengroceryinsights = true" >Grocery</div>
                        <div class="grocery-insights" v-if="hovergrocery && hoverpageopengrocery && hoverpageopengroceryinsights">
                            <div v-if="hoverpageopengroceryinsights && groceryall">Cooking Oil and Ghee</div>
                            <div>Dal and Pulse</div>
                            <div>Spices and Masala</div>
                            <div>Aata Flour and Suji</div>
                            <div>Salt and Sugar</div>
                            <div>Rice and rice products</div>
                        </div>
                    </div>
                </div>
                <div class="liquor">Liquor</div>
            </div>
        </div>
        <div class="gift-cards margin block">
                    <div>gift card</div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>

        </div>
        <div class="others margin block">
                    <div>other items to place</div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        
    </div>
    <div class="right">
        <div class="right-icon">
            <i class="fa fa-compress compare-icon" aria-hidden="true" @mouseover="comparecaptionshow = true" @mouseleave="comparecaptionshow = false"></i>
            <div class="indicator ">{{cartdata[0].compareproduct}}</div>
            <div class="indicator-caption compare" v-if="comparecaptionshow"></div>
        </div>
        <div class="right-icon">
            <i class="fa fa-heart-o wishlist-icon" aria-hidden="true" @mouseover="wishlistcaptionshow = true" @mouseleave="wishlistcaptionshow = false"></i>
            <div class="indicator">{{cartdata[0].wishlist}}</div>
            <div class="indicator-caption wishlist" v-if="wishlistcaptionshow" >wishlist</div>

        </div>
        <div class="right-icon">
            <i class="fa fa-cart-plus cart-icon" aria-hidden="true" @mouseover="cartcaptionshow = true" @mouseleave="cartcaptionshow = false" v-bind:class="{brghtfontcolor:isdataincart}"></i>
            <div class="indicator" v-bind:class="{brghtcolor:isdataincart}">{{cartdata[0].cartvalue}}</div>
            <div class="indicator-caption cartvalue" v-if="cartcaptionshow" v-bind:class="{brghtcolor:isdataincart}">cartvalue</div>
        </div>
    </div> 
</div>
</div>
    
</template>
<script>
export default {
    name:'lowestnavbar',
    data(){
        return{
            hover:false, 
            hovergrocery:false,
            hoverpageopen:true,
            hoverpageopengrocery:true,
            hoverpageopengroceryinsights:false,
            groceryall:true,
            compareproduct:0,
            wishlist:0,
            cartvalue:0,
            cartcaptionshow:false,
            wishlistcaptionshow:false,
            comparecaptionshow:false,
            isdataincart:1,
            setalldepartmentvalue:false,
        }
    },
     created () {
    window.addEventListener('scroll', this.handleScroll);
  },
    methods:{
         addtocart(){
             this.isdataincart=+1
             this.cartvalue=this.cartvalue+1
         },
         setalldepartmentvaluemethod(){
             this.setalldepartmentvalue=!this.setalldepartmentvalue
         } ,
         handleScroll (event) {
             console.log(event)
              if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.position ='fixed';
    document.getElementById("nav").style.padding ='50px';
    document.getElementById("nav").style.marginTop ='-10px';
  }
  else{
    document.getElementById("nav").style.padding ='0px';
    document.getElementById("nav").style.marginTop ='150px';
  }
  
 

         }
        },  
        computed:{
                cartdata(){
                    return this.$store.state.cartitem
                }
        },
}
</script>
<style scoped>
.sabsemain{
    background-color: black;
    position: fixed;
    width: 100vw;
    height: 40px;
    z-index: 50;
    


}
#nav{
    transition: 0.3s;
}
.container{
    display: flex;
    justify-content: space-around;
    margin-top: -30px;
    background-color: black;
    

}
.left {
    position: relative;
    width: 200px;
}
.container {
    display: flex;
    color: white;
}
.main-header{
    background-color: #006747FF;
    color: white;
    padding: 15px 0px;
    cursor: pointer;
    margin-top: -10px;
}
.main-header-subclass{
    position: absolute;
    z-index:3;

}
.main-header-subclass div{
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.412);
    padding: 10px;
}
.main-header-subclass div:hover{
    background-color: #006747FF;
    color: white;
    cursor: pointer;
}
.middle{
    display: flex;
    position: relative;
    left: -10%;
    z-index:3;
    color: white;
}
.pages{
    margin-right: 30px;
    position: relative;
}
.page-header{
    display: flex;

    cursor: pointer;
}
.page-header:hover{
    color: #006747FF;

}
.page-open{
position: absolute;
width: 200px;
left:-70px;
color: white;
cursor: pointer;
}
.page-open div{
    border-bottom: 1px solid rgba(128, 128, 128, 0.344);
    padding: 10px;
    background-color: black;
}
.page-open div:hover{
    background-color: #006747FF;
}

.page-open div:nth-child(1){
    border-top: 2px solid #006747FF;
}

.feature-header{
    display: flex;
    cursor: pointer;
    position: relative;
}
.feature-header:hover{
    color: #5c7961;
}
.feature-open{
position: absolute;

left: 0px;
width: 200px;
color: white;

}
.feature-open .grocery,.feature-open .liquor{
    border-bottom: 1px solid rgba(128, 128, 128, 0.344);
    padding: 10px;
    background-color: black;
    cursor: pointer;
}

.feature-open .liquor:hover{
    background-color: #006747FF;
}
.feature-open .grocery:hover{
    background-color: #006747FF;

}
.feature-open .grocery{
    border-top: 2px solid #006747FF;
}
.grocery{
    position: relative;
}
.grocery-insights{
    position: absolute;
    right: -90%;
    top: -5px;
    

}
.grocery-insights div{
    background-color: black;
    border-bottom: 1px solid grey;
    padding: 20px;
    color: white;
}
.grocery-insights div:hover{
    background-color:#006747FF;
}
.right{
    display:flex;
    justify-content: space-around;
    position: relative;
    left: -10%;
}
.right-icon{
    padding-left: 20px;
    padding-right: 20px;
    
}
.cart-icon,.compare-icon,.wishlist-icon{
    font-size: 25px;
    color: rgba(255, 99, 71, 0.46);
    transition: 0.3s;
}

.indicator{
    height: 25px;
    width: 25px;
    background-color: rgba(255, 99, 71, 0.576);
    border-radius: 50%;
    font-size: 15px;
    position: absolute;
    top: 20px;
    justify-content: center;
    display: flex;
    align-items: center;
    color: white;
    transition: 0.3s;
}
.indicator:hover{
    background-color: tomato;
}
.indicator-caption{
    font-size: 10px;
    background-color: rgba(128, 128, 128, 0.172);
    color: white;
    border-radius: 10px;
    padding: 5px;
    position: absolute;
   
}

.fa{
    cursor: pointer;
}
.brghtcolor{
    background-color: tomato;
}
.brghtfontcolor{
    color: tomato;
}
.margin{
    margin-left: 10px;
}
.block{
    display: flex;
}
</style>