<template>
<div>
    <div class="main">
        <div class="first">
            <div class="header">
                <img src="./lg.jpg" alt="">
                
            </div>
            <div class="phoneandcontact">
                <div class="icon"><i class="fa fa-headphones" aria-hidden="true"></i></div>
                <div>
                <div>
                    <strong>Got a Question?</strong> 
                    call us at</div>
                <div>+9779843567832</div>
                </div>
            </div>
            <div class="contact_info">
                <div> <strong>Contact info</strong> </div>
                <div> kapan-10, Budhanilkantha,KTM,Nepal </div>
            </div>
            <div class="social_medias">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            
        </div>
        <div class="second">
            <div class="header"> <strong>Find in Fast</strong> </div>
            <div class="lists">
            <div>Accessories</div>
            <div>Electronics</div>
            <div>Groceries</div>
            <div>Liquors</div>
            <div>Baby care</div>
            <div>Laptops</div>
            </div>

        </div>
        <div class="third">
            <div class="header"><strong>Information</strong></div>
            <div class="lists">
            <div>About Us</div>
            <div>Contact Us</div>
            <div>All Collections</div>
            <div>Privacy Policy</div>
            <div>Terms and conditions</div>
            </div>
        </div>
        <div class="fourth">
            <div class="lists">
             <div>Contact Us</div> 
             <div>Wishlist</div>
             <div>Delivery & Return</div>
             <div>Terms & Conditions</div>
             <div>FAQs</div>
             <div>About Us</div>
            </div>
        </div>
        <div class="fifth">
            <div class="header"><strong>In the spotlight</strong></div>
            <div class="lists">
            <div>Electronics</div>
            <div>Toys</div>
            <div>Video Games</div>
            <div>Home Products</div>
            <div>Clothing</div>
            <div>Sports & Outdoors</div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <div class="cleft">
            <div class="fa fa-copyright" aria-hidden="true"></div>
            <div>2021 retailer all right reserve</div>
        </div>
        <div class="cright">
            <img src="https://cdn.shopify.com/s/files/1/0066/4322/0562/files/patment-icon-648x76_648x_85159418-2dd1-46fe-988c-39c81f26ab1a_324x.png?v=1604560580" alt="">
        </div>
    </div>
   
</div>
</template>
<script>

export default {
    name:'footeritem',
    components:{
       
    }
}
</script>
<style scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-bottom: 1px solid rgba(128, 128, 128, 0.275);
    margin-top: 20px;
}
.header{
    font-size: 25px;
    color: #5c7961;
}
.header img{
    height: 70px;
    width: 100px;
}
.phoneandcontact{
    display: flex;
}
.icon{
    font-size: 40px;color:#006747 ;

}
.social_medias{
    display: flex;
    font-size: 30px;

}
.social_medias .fa{
    padding: 20px;
}
.lists div{
    cursor: pointer;
    transition: 0.3s;
    padding: 5px 10px;
}
.lists div:hover{
    color:#006747;
}
.third{
    margin-top: -30px;
}
.fourth{
    margin-top: 25px;
}
.social_medias i{
    transition: 0.3s;
    cursor: pointer;
}
.social_medias i:hover{
    color:#006747;

}
.copyright{
    height: 50px;
    width: 100%;
    background-color:rgba(128, 128, 128, 0.07);
     justify-content: space-between;
     align-items: center;
     display: flex;
}

.cleft{
    display: flex;
   
    color: gray;
    margin-left: 50px;
  
}
.cright{
    margin-right: 50px;
}
</style>