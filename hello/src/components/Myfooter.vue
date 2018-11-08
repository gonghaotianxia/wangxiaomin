<template>
    <div>
        <footer>
            <div @clcik="tomyindex">
                我的主页
            </div>
            <router-link tag="div" to="./faxian">
                        <div>
                            发现
                        </div>
            </router-link>
             <div @click="togoumai">
                购买
            </div>
             <div>
                玩伴
            </div>
             <div>
                我的
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    methods:{
        togoumai(){
            this.$router.push('./goumai')
        },
        tomyindex(){
            this.$router.push('./Myindex')
        }
    }
}
</script>
<style scoped>
    footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 79px;
        background: #cccccc;
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
    footer div{
        flex: 1;
        text-align: center;
    }
    footer div.router-link-exact-active{
        background: red;
    }
</style>
