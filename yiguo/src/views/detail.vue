<template>
    <div class="detail">
        <!--a1轮播图-->
        <Swipe tag="ul" class="my-swipe2">
            <SwipeItem tag="li" class="slide1"><img src="../assets/images/j-d01.jpg"></swipeItem>
            <SwipeItem tag="li" class="slide2"><img src="../assets/images/j-d02.jpg"></SwipeItem>
        </Swipe>
    
	<!--介绍-->
    <div class="details-body-box">
        <div class="tm">
            <div class="td2">
                <div class="td2_price"><span>已售：<b>{{detail.solided}}</b>件</span></div>
                <div class="cl"></div>
                <div class="td2_name"> {{detail.tit}} </div>
                <div class="td2_cx">{{detail.det}}</div>
            </div>
        </div>
        <div class="tm2">
            <div class="td2_info">
                <div class="td2_num">支付开团并邀请<span id="tuan_more_need_number">{{detail.num}}</span>人参团，人数不足自动退款</div>
            </div>
            <div style="visibility: visible;" class="kt">
                <div class="pin"> 
                    <div class="pin_btn_box">
                        <div class="pin_btn">
                            3人团
                        </div>
                    </div>
                    <div class="pin_btn_box">
                        <div class="pin_btn pin_btn_bg2">
                            原价
                        </div>
                    </div>
                    <div class="cl"></div>
                </div>
                <div>
                    <a href="javascript:void(0);" class="kt_item kt_item_buy ">
                        <div class="kt_price"><b>￥{{detail.prpr}}</b>&nbsp;/&nbsp;700g~800g</div>
                        <div class="kt_btn" id="tuan_one_number">原价购买</div>
                    </a>
                    <router-link to="/ground" class="kt_item">
                        <div class="kt_price"><b>￥{{detail.nowpr}}</b>&nbsp;/&nbsp;700g~800g</div>
                        <div class="kt_btn">立即拼团<br></div>
                    </router-link>   
                </div>
                
            </div> 
        </div>        
        <!--拼团玩法-->
        <div class="step">
            <div class="step_hd">
                拼团玩法<a class="step_more" href="javascript:;">查看详情</a>
            </div>
            <div id="footItem" class="step_list">
                <div class="step_item step_item_on">
                    <div class="step_num">1</div>
                    <div class="step_detail">
                        <p class="step_tit">选择
                            <br>心仪商品</p>
                    </div>
                </div>
                <div class="step_item ">
                    <div class="step_num">2</div>
                    <div class="step_detail">
                        <p class="step_tit">支付开团
                            <br>或参团</p>
                    </div>
                </div>
                <div class="step_item ">
                    <div class="step_num">3</div>
                    <div class="step_detail">
                        <p class="step_tit">等待好友
                            <br>参团支付</p>
                    </div>
                </div>
                <div class="step_item">
                    <div class="step_num">4</div>
                    <div class="step_detail">
                        <p class="step_tit">达到人数
                            <br>团购成功</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="outs-box">
            <h1>商品详情</h1>
            <img src="../assets/images/d1.jpg">
            <img src="../assets/images/d2.jpg">
            <img src="../assets/images/d3.jpg">
            <img src="../assets/images/d4.jpg">
        </div>
    </div>

    <!--detail_footer begin-->
	<footer class="detail_footer">
        <div class="return_left_box">
            <router-link to="/home"><div class="return_home fl"></div></router-link>
            <a href="javascript:void(0);"><div class="return_home share_tuan fl"></div></a>    
        </div>  
         <router-link to="/ground"><div class="promptly_tuan fl">立即去拼团</div></router-link>
        
        <div class="cl"></div>

    </footer>
    <!--detail_footer end-->
    </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import {Swipe,SwipeItem} from "vue-swipe"

export default {
    data(){
        return{
            detail:{}
        }
    },
    mounted(){
         let _id =  Number(this.$route.params.id)-1
        axios({
            url:"/data/detail.json"
        }).then(res=>this.detail=res.data[_id])
    },
    components:{
        Swipe,SwipeItem
    }
}
</script>

<style>
.my-swipe2 {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>

