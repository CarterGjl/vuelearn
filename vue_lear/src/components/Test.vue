<template>
<h2 class="red">test...{{msg}}</h2>
</template>

<script>
export default {
  name: 'Test',
  props: {
    msg: {
      type: String,
      default: 'test msg'
    }
  },
  methods: {

  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .red{
    background: red;
  }
</style>
