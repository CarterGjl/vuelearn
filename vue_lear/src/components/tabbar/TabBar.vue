<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-dianying"/>
        <p>电影</p>
      </router-link>
      <router-link tag="li"  to="/cinema">
        <i class="iconfont icon-yingyuan"/>
        <p>影院</p>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-wode"/>
        <p>我的</p>
      </router-link>

    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    value: String
  }
}
</script>

<style scoped>
  #footer {
    width: 100%;
    height: 50px;
    background: white;
    border-top: 2px #ebe8e3 solid;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  #footer ul {
    list-style-type:none;
    display: flex;
    height: 40px;
  }

  #footer ul li {
    flex: 1;
    height: 40px;
  }

  /*#footer li.active {*/
  /*  color: #f03d37;*/
  /*}*/

  #footer ul i {
    list-style-type:none;
    font-size: 20px;
  }

  #footer ul li.router-link-active{
    color: #f03d37;
  }
  #footer ul p {
    font-size: 12px;
    line-height: 18px;
  }
</style>
