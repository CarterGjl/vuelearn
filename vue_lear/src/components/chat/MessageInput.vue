<template>
  <div class="footer">
    <div class="chat-input">
      <div class="input-wrapper">
        <div ref="divinput" class="message-input" contenteditable="true" placeholder="please input message" @keyup.enter="send($event)" />
      </div>
    </div>
    <div class="input-send-options">
      <i class="iconfont icon-send" @click="send"/>
    </div>
<!--    <textarea placeholder="place input message"  type="text" v-model="message" @keyup.enter="send(message)"/>-->
<!--    <button @click="send(message)">发送</button>-->
  </div>
</template>

<script>
import '../../assets/iconfont.css'
import Message from './Message'
export default {
  name: 'MessageInput',
  methods: {
    send (event) {
      let content = this.$refs.divinput.innerText
      let message = new Message(this.generateUUID(), '2', content)
      this.$refs.divinput.innerText = null
      this.$emit('on-send-message', message)
      event.preventDefault()
      return false
    },
    generateUUID () {
      let d = new Date().getTime()
      if (window.performance && typeof window.performance.now === 'function') {
        d += performance.now()
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
    }
  },
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>
  .icon-send{
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .footer {
    border-radius: 5px;
    display: -webkit-flex;
    display: flex;
    border: 3px solid #eee;
  }
  .footer input {
    flex: auto;
    border-radius: 5px;
    border: none;
    border-right: 1px solid #eee;
    font-size: 18px;
    padding-left: 4px;
  }
  .footer button {
    width: 50px;
    font-size: 18px;
  }
  textarea{
    flex: 1;
    line-height: 16px;
  }
  .chat-input{
    width: 90%;
    flex-shrink: 0;
    min-height: 50px;
    max-height: 150px;
    padding: 5px 0;
    padding-left: 5px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: auto;
    background: white;
  }
  .input-wrapper{
    width: 90%;
    min-height: 40px;
  }
  .message-input{
    text-align: left;
    width: 100%;
    outline: none;
    min-height: 40px;
    cursor: text;
    font-size: 15px;
  }
  .message-input:empty::before{
    font-size: 14px;
    content: attr(placeholder);
    color: #ccc;
  }
  .input-send-options{
    flex: 1;
    padding: 5px 0;
    height: 40px;
    display: flex;
    justify-content: flex-end;
  }
</style>
