<template>

<div class="home">
    
  <!--html5 nav-->
	<nav class="j-nav navbar index-nav">
        <div class="logo fl">
			<a href="javascript:void(0);"></a>
		</div>
		<div class="city">
			<a id="showSiteBtn" href="javascript:;" target="_self">{{city}}</a>
			<input id="switchGPS" name="switchGPS" type="hidden">
		</div>
    </nav>
	<!--a1轮播图-->
    

   
        <Swipe tag="ul" class="my-swipe">
            <SwipeItem tag="li" class="slide1"><img src="../assets/images/j-banner02.jpg"></swipeItem>
            <SwipeItem tag="li" class="slide2"><img src="../assets/images/j-banner04.jpg"></SwipeItem>
        </Swipe>
	   
	<div class="j-hint">仅20元起送，24小时内极速达</div>
	<!--导航-->
	<div class="j-component-func" id="m-banner">
        <ul class="list-unstyled" id="categoryMenu">
            <li class="route1 "><a href="#"><span class="glyphicon fdayicon fdayicon-all"></span>新用户</a></li>
            <li class="route2 "><a href="#"><span class="glyphicon fdayicon fdayicon-order"></span>套餐</a></li>
            <li class="route3 "><a href="#"><span class="glyphicon fdayicon fdayicon-contact"></span>邀请红包</a></li>
            <li class="route4 "><a href="#"><span class="glyphicon fdayicon fdayicon-client"></span>企业团购</a></li>
        </ul>
    </div>
    
    <!--内容-->
	<div class="j-component-bestsell">
	    <ul class="list-unstyled">
            <li><a href="javascript:void(0);"><img class="lazy" src="../assets/images/j-c03.jpg"></a></li>
        </ul>
	</div>

	<div id="tuan" class="tuan">
        <div class="tuan_g" data-vtuan="0" data-cat="1" data-num="12058">
            <i></i>
            <router-link 
            v-for="itm in main" :key="itm.id"
            :to="'/detail/'+itm.id">
           
                <div class="tuan_g_img">
                    <div class="tally_box">
                        <p>{{itm.t1}}</p>
                        <p>{{itm.t2}}</p>
                    </div>
                    <img :src="itm.img">
                </div>
                <div class="tuan_g_info">
                    <p class="tuan_g_name">{{itm.tit}}</p>
                    <p style="display: black;" class="tuan_g_cx">
                        <strong style="color:red;font-size:16px;"> 商品{{itm.id}} </strong>{{itm.det}}
                    </p>
                </div>
                
                <div class="tuan_g_core">
                    <div id="triangle-right"></div>
                    <div class="tuan_g_price">
                        <span>3人团只需</span>
                        <b>¥{{itm.price}}</b>
                    </div>
                    <div class="tuan_g_btn">我要拼</div>
                </div>
                <div class="tuan_g_yj"><s>原价:￥{{itm.ppre}}</s></div>
            </router-link>
           
        </div>
    </div>
<footbar></footbar>
    </div>
</template>


<script>
import 'vue-swipe/dist/vue-swipe.css';
import footbar from "./footbar.vue"
import {Swipe,SwipeItem} from "vue-swipe"
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
      return{
          city:'上海',
          main:[]
      }
  },
  components: {
    footbar,Swipe,SwipeItem
  },
  mounted(){
      axios({
          url:'/data/main.json'
      }).then(res=>this.main=res.data)
  }
}
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>
