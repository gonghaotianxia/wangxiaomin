<template>
    <div>
        <footer>
           <router-link tag="div" to="./Myindex">
                <div>
                    主页
                </div>
            </router-link>
            <router-link tag="div" to="./faxian">
                <div>
                    发现
                </div>
            </router-link>
            <router-link tag="div" to="./goumai">
                <div>
                   购买
                </div>
            </router-link>
            <router-link tag="div" to="./wanpan">
                <div>
                    玩伴
                </div>
            </router-link>
            <router-link tag="div" to="./myde">
                <div>
                    我的
                </div>
            </router-link>
        </footer>
    </div>
</template>
<script>
import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
export default {
    name:"Myfooter",
    data(){
        return{

        }
    },
    
  methods: {
    // togoumai() {
    //   this.$router.push("./goumai");
    // this.background='red';
    // },
    // tomyindex() {
    //   this.$router.push("./Myindex");
    // },
    // tomyde() {
    //   this.$router.push("./myde");
    // }
  }
};
</script>
<style lang="less" scoped>

.px2rem(@name, @px){
    @{name}: @px / 75 * 1rem;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
 .px2rem(height,200);
  background: #cccccc;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
footer div {
  flex: 1;
  text-align: center;
  .px2rem(line-height,200);
  width: 100%;
  height: 100%;
  color: black;
  .px2rem(font-size,60);
}
footer div.router-link-exact-active {
  background: red;
  color: yellow;
}
footer div:hover{
    background: #777;
    color: #ffffff;
}
</style>
