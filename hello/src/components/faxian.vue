<template>
    <div>
        发现页面
        <Myfooter></Myfooter>
    </div>
</template>

<script>
import Myfooter from '../components/Myfooter'
export default {
    components:{
        Myfooter
    }
}
</script>

<style lang="less" scoped>
    .px2rem(@name, @px){
        @{name}: @px / 75 * 1rem;
    }

</style>