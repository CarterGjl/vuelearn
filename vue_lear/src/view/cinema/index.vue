<template>
  <div>
    <Header title="喵喵影院"/>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_search">
          全城<i class="iconfont icon-lower-triangle"/>
        </div>
        <div class="brand_switch">
          品牌<i class="iconfont icon-lower-triangle"/>
        </div>
        <div class="feature_switch">
          特色<i class="iconfont icon-lower-triangle"/>
        </div>
      </div>
      <CiList/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import TabBar from '../../components/tabbar/TabBar'
import CiList from '@/components/cilist'
export default {
  name: 'cinema',
  components: {
    Header,
    TabBar,
    CiList
  }
}
</script>

<style scoped>
  #content .cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
