<template>
  <div class="send">
    {{message.content}}
<!--    <div class="arrow"></div>-->
  </div>
</template>

<script>
export default {
  name: 'Messageitem',
  props: {
    message: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .send {
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    display: block;
    max-width: 150px;
    align-self: flex-end;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    background: #2ECC71;
    border-radius: 10px 0 10px 10px;;
    /* 圆角 */
    line-height: 35px;
    margin-right: 10px;
    /*padding: 0 10px;*/
    padding: 6px 10px;
  }
  .send .arrow {
    position: absolute;
    top: 5px;
    right: -15px;
    width: 0;
    height: 0;
    font-size: 0;
    border: solid 8px;
    border-color: #fff #fff #fff #2ECC71;
  }
</style>
