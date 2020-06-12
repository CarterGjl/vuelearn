<template>
<div>city</div>
</template>

<script>
export default {
  name: 'City',
  mounted () {
    this.axios.get('/api/cityList').then(result => {
      console.log(result)
    })
  }
}
</script>

<style scoped>
  #content .city_body{
    margin-top: 45px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .city_body .city_list{
    flex: 1;
    overflow: auto;
    background: #fff5f0;
  }
  .city_body .city_list::-webkit-scrollbar{
    background-color: transparent;
    width: 0;
  }
  .city_body .city_hot{
    margin-top: 20px;
  }
  .city_body .city_hot h2{
  }
  .city_body .city_hot ul{
  }
  .city_body .city_hot ul li{
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;

  }
</style>
