<template>
  <div class="send-left" @contextmenu.prevent="clickRight(message.content,$event)">
    {{message.content}}
<!--    <div class="arrow"></div>-->
  </div>
</template>

<script>
// import ContextMenu from 'vue-contextmenujs'
export default {
  name: 'MessageItemLeft',
  methods: {
    clickRight (content, event) {
      alert(content)
      this.$contextmenu({
        items: [
          {
            label: '返回(B)',
            onClick: () => {
              this.message = '返回(B)'
              console.log('返回(B)')
            }
          },
          { label: '前进(F)', disabled: true },
          { label: '重新加载(R)', divided: true, icon: 'el-icon-refresh' },
          { label: '另存为(A)...' },
          { label: '打印(P)...', icon: 'el-icon-printer' },
          { label: '投射(C)...', divided: true },
          {
            label: '使用网页翻译(T)',
            divided: true,
            minWidth: 0,
            children: [{ label: '翻译成简体中文' }, { label: '翻译成繁体中文' }]
          },
          {
            label: '截取网页(R)',
            minWidth: 0,
            children: [
              {
                label: '截取可视化区域',
                onClick: () => {
                  this.message = '截取可视化区域'
                  console.log('截取可视化区域')
                }
              },
              { label: '截取全屏' }
            ]
          },
          { label: '查看网页源代码(V)', icon: 'el-icon-view' },
          { label: '检查(N)' }
        ],
        event,
        customClass: 'class-a',
        zIndex: 3,
        minWidth: 230
      })
      return false
      // this.$emit('click-right', content)
      // alert(`${content}`)
    }
  },
  props: {
    message: {
      type: Object
    }
  },
  components: {
    // ContextMenu
  }
}
</script>

<style scoped>
  .send-left {
    white-space: normal;
    display: block;
    align-self: flex-start;
    margin-top: 10px;
    min-width: 120px;
    max-width: 150px;
    position: relative;
    background: #F8C301;
    border-radius: 0 10px 10px 10px;;
    /* 圆角 */
    line-height: 35px;
    margin-left: 10px;
    padding: 0 10px;
  }
  .send-left .arrow {
    position: absolute;
    top: 5px;
    left: -15px;
    width: 0;
    height: 0;
    font-size: 0;
    border: solid 8px;
    border-color: #fff #F8C301 #fff #fff;
  }
</style>
