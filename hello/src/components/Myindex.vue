<template>
    <div>
        <div class="title">
            <i class="fa fa-search fa-2x" aria-hidden="true"></i>
            <span>首页</span>
            <i class="fa fa-align-left fa-2x" aria-hidden="true"></i>
        </div>
        <div class="swiper-container">
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
        <Myfooter></Myfooter>
    </div>
</template>

<script>
import Myfooter from '../components/Myfooter'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    components:{
        Myfooter
    },
    data(){
        return {
            // img: require('../');
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
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .px2rem(@name, @px){
        @{name}: @px / 75 * 1rem;
    }
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
</style>
