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

  },
  methods:{
    greet: function (event) {
      alert(event.target.tagName)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
