<template>
    <div class="home">
        eee
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
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

  },
  methods:{
    greet: function () {
      this.$http.get('/api/v4/get_info').then(res => {
        console.log(res);
        console.log('2333');
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
