<template>
    <div class="myindex" >
        <div class="title">
            <i class="fa fa-search fa-2x" aria-hidden="true"></i>
            <span>首页</span>
            <!-- <router-link tag="div" to="./motaichuang"> -->
                <i class="fa fa-align-left fa-2x" aria-hidden="true" @click="abc"></i>
            <!-- </router-link> -->
        </div>
        <div class="motai" v-show="show">
            <div class="tou">
                <div class="up">
                    <div class="left">
                        <img src="../assets/falali.png" alt="">
                    </div>
                    
                    <div class="right">
                        <p>Amanda $ 007</p>
                        <div class="b">
                            <span>女</span><span>深圳</span><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                
            </div>
         </div>
        <div class="swiper-container" @click="ab">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="@/assets/carBlack.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/carDeepGrayOrange.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/carRed.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/carHotPink.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="@/assets/carGray.png" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </div>
        <!-- <motaichuang></motaichuang> -->
        <Myfooter></Myfooter>
    </div>
</template>

<script>
import motaichuang from '../components/motaichuang'
import Myfooter from '../components/Myfooter'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    components:{
        Myfooter,
        // motaichuang
    },
    data(){
        return {
            // img: require('../');
            show:false
        }
    },
    mounted(){
        new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay:true,
        })        
    },
    methods:{
        tomotaichuang() {
            this.$router.push("./motaichuang");
            show:true
        },
        abc(){ 
            this.show = true
        },
        ab(){
            this.show = false
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .px2rem(@name, @px){
        @{name}: @px / 75 * 1rem;
    }
    
    // motaichuang{
    //     position: absolute;
    //     right: 0;
    //     top: 0;
    // }
    .title{
        display: flex;
        justify-content: space-around;
        span{
            .px2rem(font-size, 60);
        }
        align-items: center;
        .px2rem(height, 100);
        background: rgb(66, 155, 170);
        color: #fff;
        width: 100%;
    }
    .swiper-container {
        width: 100%;
        margin: 20px auto;
        .px2rem(margin, 20);
    }
    .swiper-slide{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .motai{
    height: 100%;
    width: 70%;
    position: absolute;
    right: 0;
    top: 0;
    bottom:0;
    background: rgba(82, 115, 163, 0.8);
    z-index: 99;
    .px2rem(padding, 50);
    color: #fff;
}
.tou{
    width: 100%;
    display: flex;
    flex-direction: column;
    .up{
        display: flex;
        // justify-content: space-around;
        .left{
            .px2rem(width, 200);
            .px2rem(height, 200);
            background: rgba(56, 230, 157,0.5);
            img{
                .px2rem(width, 200);
                .px2rem(height, 200);
                 border-radius: 50%;
            }
        }
        
        .right{
            display: flex;
            flex-direction: column;
            .px2rem(font-size, 36);
            .px2rem(line-height,100);
            .px2rem(padding-left, 40);
        }
    }
}
</style>
