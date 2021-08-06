<template>
    <div>
        <div class="main_container">
            <div class="left">
                <div class="featured" v-on:click="dtashow=true,onsaleshow=false,topratedshow=false" >
                    <div class="up">
                       <strong>Featured</strong>
                    </div>
                    <div class="down" v-for="item in dta.featured" :key="item.key">
                        <div class="down_left">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="down_right">
                            <div class="name">{{item.name}}</div>
                            <div class="price">
                                <div class="new_price">Rs.{{item.price}}</div>
                                <div class="old_price" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="onsale" v-on:click="dtashow=false,onsaleshow=true,topratedshow=false" >
                    <div class="up">
                       <strong>On Sale</strong>
                    </div>
                    <div class="down" v-for="item in dta.onsale" :key="item.key">
                        <div class="down_left">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="down_right">
                            <div class="name">{{item.name}}</div>
                            <div class="price">
                                <div class="new_price">Rs.{{item.price}}</div>
                                <div class="old_price" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="toprated" v-on:click="dtashow=false,onsaleshow=false,topratedshow=true" >
                    <div class="up">
                       <strong>Top Rated</strong>
                    </div>
                    <div class="down" v-for="item in dta.toprated" :key="item.key">
                        <div class="down_left">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="down_right">
                            <div class="name">{{item.name}}</div>
                            <div class="price">
                                <div class="new_price">Rs.{{item.price}}</div>
                                <div class="old_price" v-if="item.oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <img src="./img/extraitemadphoto.jpg" alt="">
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'extrafeature',
    data(){
        return{
            dta:{featured:[
                 {name:'Basmati Rice',category:'nepali rice',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                {name:'Sona Mansuli Rice',category:'indian rice',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                { name:'Sona Mansuli Rice',category:'white rice',price:'3000',oldprice:'2500',img:require('./img/download-removebg-preview.png'),key:'9'},
                { name:'Jeera Masino Rice',category:'brown rice',price:'1000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'10'},
                {name:'Safya Sunflower oil',category:'sunflower oil',price:'2000',oldprice:'2100',img:require('./img/download__3_-removebg-preview.png'),key:'11'},
                
            ],
            onsale:[
                 { name:'Aquaphore baby lotion',category:'Baby care',price:'2000',oldprice:'2500',img:require('./img/652540-product-roundup-The-8-Best-Baby-Lotions-According-to-Dermatologists-732x549-Feature-removebg-preview.png'),offerPercent:'10',key:'8'},
                { name:'Sona Mansuli Rice',category:'white rice',price:'3000',oldprice:'2500',img:require('./img/download-removebg-preview.png'),key:'9'},
                { name:'Jeera Masino Rice',category:'brown rice',price:'1000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'10'},
                {name:'Safya Sunflower oil',category:'sunflower oil',price:'2000',oldprice:'2100',img:require('./img/download__3_-removebg-preview.png'),key:'11'},
                
                {name:'Marci Rice',category:'onsale',price:'2100',img:require('./img/food-removebg-preview.png'),key:'4'},
                { name:'krishnabhog Rice',category:'onsale',price:'3000',oldprice:'4000',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'5'},
            ],
            toprated:[
                 {name:'Basmati Rice',category:'toprated',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'10',key:'1'},
                {name:'Sona Mansuli Rice',category:'toprated',price:'3000',img:require('./img/food-removebg-preview.png'),key:'2'},
                { name:'Jeera Masino Rice',category:'toprated',price:'2000',oldprice:'2500',img:require('./img/rice-removebg-preview.png'),offerPercent:'30',key:'3'},
                {name:'Marci Rice',category:'toprated',price:'2100',img:require('./img/food-removebg-preview.png'),key:'4'},
                { name:'krishnabhog Rice',category:'toprated',price:'3000',oldprice:'4000',img:require('./img/rice-removebg-preview.png'),offerPercent:'20',key:'5'},
            ],
            
            },
            dtashow:true,
            onsaleshow:false,
            topratedshow:false
        }
    }

    
}
</script>
<style scoped>
.main_container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 200px;
}
.up{
    border-bottom: 1px solid gray;
    color: #ff9a03;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}
.up:hover{
    color: black;
}
.down{
    display: flex;
    margin: 10px;
    cursor: pointer;
    color: black;
    padding: 10px;
    box-shadow: 0px 0px 4px black;
}
.left{
    display: flex;

}
.price{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
.down_left img{
    height: 100px ;
    width: 100px;
}
.old_price{
    color: #860d0d;
}
.right{
    position: relative;
    bottom: 150px;
    left: 20px;
}

</style>