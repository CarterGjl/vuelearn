<template>
  <div>
    <div>{{count}}</div>
    <button @click="query">click</button>
    <button @click="increment">click</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  created () {
    // this.count = this.$store.state.count
  },
  methods: {
    query () {
      this.$router.push({path: '/query', query: {page: 1}})
    },
    increment () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style scoped>

</style>
