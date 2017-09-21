<template>
    <div class="home">
        <div id="container" style="width:100%; height:500px"></div>
    </div>
</template>

<script>
import { Field } from 'mint-ui';
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    console.log('222');
    
    this.greet();
    this.getMap()

  },
  methods:{
    getMap (){
      console.log('我是地图')
      var map = new AMap.Map('container',{
         zoom: 10,
         center: [121.4,31.2]
      });
    },
    greet () {
      this.$http.get('/api/v4/get_info/').then(res => {
        console.log(res);
        console.log('2333');
      }).catch(err => {
        console.log(err);
      });
    }
  },
  conponent: {
    'Field':Field
  }
}
</script>

<style lang="scss" scoped>

</style>
