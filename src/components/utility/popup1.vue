<template>
<div>
    <div id="popup3" class="overlay">
	<div class="popup">
		<h2 class="name">{{item.name}}</h2>
        <div class="category">{{item.category}}</div>
        <img :src="item.img" alt="" class="image">
		<a class="close" href="#" v-on:click="resettrue">&times;</a>
		<div class="content" style="margin-top:50px">
            <div class="price">
                <div class="newprice">Rs.{{item.price}}</div>
                <div class="oldprice"> <s>Rs.{{item.oldprice}}</s> </div>
            </div>
            <div class="size">size:
                <select name="size" id="size">
                        <option value="large">L</option>
                        <option value="extralarge">XL</option>
                </select>
            </div>
            <div class="color">color:
                <select name="color" id="color">
                        <option value="pink">Pink</option>
                        <option value="lue">Blue</option>
                        <option value="brown">Brown</option>
                </select>
            </div>
            <div class="features">
                    <li>1.Very Tasty</li>
                    <li>2.Very healthy</li>
                    <li>3.Nepali product</li>
                    <li>4.Heavy offer</li>
            </div>
            <div class="conclusion">
                <div class="additembox">
                        <p>Quantity</p>
                        <div class="actualquantity">
                            <div>{{itemincart}}</div>
                            <div class="plus_minus_icon">
                                    <i class="fa fa-plus" aria-hidden="true" v-on:click="increase"></i>
                                    <i class="fa fa-minus" aria-hidden="true" v-on:click="decrease"></i>
                            </div>
                        </div>
                </div>
                <div class="addtocart" v-on:click="addtocart">
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
                    <span>add to cart</span>

                </div>
            </div>
    <div v-if="addedsignal" class="addedsignal">added to cart</div>
		</div>
	</div>
</div>
</div>
</template>
<script>
export default {
    name:'popup1',
    props:['propsdata1'],
    data() {
  return {
    item: Object.assign({}, this.propsdata1),
    itemincart:0,
    addedsignal:false
  }
    },
    methods:{
        increase(){
            this.itemincart+=1
        },
         decrease(){
            this.itemincart-=1
        },
      
        resettrue(){
            this.$store.commit('resettrue')
        },
         addtocart(){
            this.$store.commit('updatecartvalue',this.itemincart)
            this.addedsignal=true
            setTimeout(() => {
                this.addedsignal=false
            }, 2000);

         }
    },
}
</script>
<style scoped>

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index: 60;

}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 60%;
  min-height: 500px;
  position: relative;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup .close:hover {
  color: #06D85F;
}

.image{
    height: 300px;
    width: 300px;
    position: absolute;
    left: 20px;
}
.conclusion{
    display: flex;

}
.actualquantity{
    height: 20px;
    width: 150px;
    background-color: gray;
}
.plus_minus_icon{
    display: flex;
}

#size{
    height: 30px;
    width: 100px;
    background-color: #333;
    color: white;
    font-weight: 600;
    margin-left: 10px;
}
#color{
    height: 30px;
    width: 100px;
    background-color: #333;
    color: white;
    font-weight: 600;
    margin-left: 3px;
    margin-top: 10px;
}

.conclusion{
   margin-left: 300px;
}
.newprice{
    font-size: 20px;
    color: #ff9a03;
}
.oldprice{
      font-size: 20px;
      color: #860d0d;
}
.actualquantity{
    display: flex;
    justify-content: space-between;
}
.fa{
    margin-left: 10px;
    cursor: pointer;
}

li{
    list-style: none;
}
.features li{
    margin: 10px;
}
.addtocart{
    margin-top: 10px;
    background-color: #333;
    padding: 10px;
    color: white;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 10px;
    transition: 1s;
}
.addtocart:hover{
    background-color: antiquewhite;
    color: black;
}
.name{
    color: #006747FF;
}
.addedsignal{
    height: 40px;
    width: 200px;
    background-color: #006747FF ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: 300px;
}
</style>