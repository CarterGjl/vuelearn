<template>
 <div class="main">
<!--   welcome-->
<!--   <div v-if="show">show</div>-->
<!--   <div v-if="error">error</div>-->
<!--   <div v-on:click="change">change</div>-->
   <chat-header/>
   <MessageList :message-list="messageList"/>
   <message-input v-on:on-send-message="addMessage"/>
   <MainTabBar v-on:change-path="changePath"/>
 </div>
</template>

<script>
import MainTabBar from './MainTabBar'
import MessageList from './chat/MessageList'
import MessageInput from './chat/MessageInput'
import ChatHeader from './chat/ChatHeader'

export default {
  name: 'WelcomePage',
  created () {
    this.messageList = [{id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h hwkajfdkal jdlkfmadslk n快递费卡拉金克劳福德那是考虑南方大厦开放男打死了开发你打算考虑呢独食难肥看的撒临汾ADSL可能你发的安康路 casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}, {id: '123', type: '1', content: 'hahh h h casd '}, {id: '1234', type: '2', content: 'hahh h h casd '}, {id: '12345', type: '1', content: 'hahh h h casd '}, {id: '123456', type: '2', content: 'hahh h h casd '}]
  },
  data () {
    return {
      show: true,
      error: false,
      messageList: []
    }
  },
  methods: {
    changePath: function (path) {
      console.log(path)
    },
    change () {
      this.show = !this.show
      this.error = !this.error
    },
    addMessage (message) {
      this.messageList.push(message)
    }
  },
  components: {
    ChatHeader,
    MainTabBar,
    MessageList,
    MessageInput
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
</style>
