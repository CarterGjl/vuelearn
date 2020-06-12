<template>
  <div class="box">
    <transition-group tag="ul" name="list">
      <div class="body" v-for="(message,index) in messageList " :key="index">
        <MessageItemLeft v-if="message.type === '1'" :message="message" v-on:click-right="clickRight"/>
        <MessageItemRight v-else :message="message"/>
      </div>
    </transition-group>
  </div>
</template>

<script>
import MessageItemLeft from './MessageItemLeft'
import MessageItemRight from './MessageItemRight'

export default {
  name: 'MessageList',
  props: {
    messageList: []
  },
  methods: {
    clickRight () {
      alert('click right button')
    }
  },
  watch: {
    messageList: function (val) {
      this.$nextTick(() => {
        let divDom = this.$el
        console.log(divDom)
        divDom.scrollTop = divDom.scrollHeight
      })
    }
  },
  components: {
    MessageItemLeft,
    MessageItemRight
  },
  data () {
    return {
      // messageList: [{id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}]
    }
  }
}
</script>

<style scoped>
  .box{
    flex-grow: 1;
    overflow: scroll;
  }
  .body {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s ease;
  }
</style>
