<template>
  <div id="main">
    <Header title="喵喵电影"/>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"/>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" ro="/movie/comingsoon" class="hot_item">即将热映</router-link>

        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"/>
        </router-link>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
<!--    <MainTabBar/>-->
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/header'
import MainTabBar from '../../components/MainTabBar'
import TabBar from '../../components/tabbar/TabBar'
export default {
  name: 'Movie',
  components: {TabBar, Header, MainTabBar}
}
</script>

<style scoped>
  #main{
    height: 100%;
    flex: 1;
    flex-direction: column;
  }
  #content{
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  #content .movie_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
  }
  .movie_menu .city_name{
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
  }
  .movie_menu .city_name.active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
  .movie_menu .city_name.router-link-active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
  .movie_menu .hot_switch{
    display: flex;
    height: 100%;
    line-height: 45px;
  }
  .movie_menu .hot_item{
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
  }
  .movie_menu .hot_item.active{
    color: #ef4238;
    border-bottom: 1px #ef4238 solid;
  }
  .movie_menu .hot_item.router-link-active{
    color: #ef4238;
    border-bottom: 1px #ef4238 solid;
  }
  .movie_menu .search_entry{
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
  }
  .movie_menu .search_entry.active{
    color: #ef4238;
    border-bottom: 2px #ef4238 solid;
  }
  .movie_menu .search_entry i{
    font-size: 24px;
    color: red;
  }
</style>
