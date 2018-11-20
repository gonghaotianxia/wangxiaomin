<template>

    <div class="motai" v-if="show">
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
</template>
<script>
// import Myindex from '../components/Myindex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    // name:'motaichuang',
    components:{
        // Myindex
    },
    data(){
        return{
             show:true
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.px2rem(@name, @px){
    @{name}: @px / 75 * 1rem;
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
