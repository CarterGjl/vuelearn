<template>
  <div id="container">
    <tab-bar v-model="select"  v-on:changepath="changePath">
<!--      <div id="tabbar" >-->
        <TabBarItem v-for="item in tabbars" :key="item.icon" :item="item" />
<!--      </div>-->
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  },
  beforeCreate () {
    console.log('beforeCreate main tab bar1')
  },
  created () {
    console.log('create main tab bar')
  },
  beforeMount () {
    console.log('beforeMount main tab bar')
  },
  mounted () {
    console.log('mounted main tab bar')
  },
  beforeUpdate () {
    console.log('beforeUpdate main tab bar')
  },
  updated () {
    console.log('updated main tab bar')
  },
  beforeDestroy () {
    console.log('beforeDestroy main tab bar')
  },
  destroyed () {
    console.log('destroyed main tab bar')
  },
  methods: {
    changePath (path) {
      console.log(path)
      this.$emit('change-path', path)
    }
  },
  data: function () {
    return {tabbars: [{title: '我的', icon: 'iconfont icon-wode', path: '/1'},
      {title: '影院', icon: 'iconfont icon-yingyuan', path: '/2'},
      {title: '电影', icon: 'iconfont icon-dianying', path: '/3'}],
    select: '/1'
    }
  },
  name: 'MainTabBar'
}
</script>

<style scoped>
  #container{
    display: flex;
    flex-direction: row;
    box-shadow: 0px -1px 1px rgba(100,100,100,-1);
  }
  #tabbar{
    flex: 1;
  }
</style>
