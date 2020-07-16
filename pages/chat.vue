<template>
  <div class="chat">
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <div class="bubbleWrapper">
          <template v-if="message.isOwn">
            <div class="inlineContainer own">
              <img
                class="inlineIcon"
                src="https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png"
              />
              <div class="ownBubble own">{{ message.message }}</div>
            </div>
            <span class="own">{{ message.time }}</span>
          </template>
          <template v-else>
            <div class="inlineContainer">
              <img
                class="inlineIcon"
                src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
              />
              <div class="otherBubble other">{{ message.message }}</div>
            </div>
            <span class="other">{{ message.time }}</span>
          </template>
        </div>
      </li>
    </ul>
    <form class="msger-inputarea">
      <input
        type="text"
        class="msger-input"
        placeholder="Enter your message..."
      />
      <button type="submit" class="msger-send-btn">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        {
          isOwn: true,
          message: 'hello there !',
          time: '11:11',
        },
        {
          isOwn: false,
          message: 'General Kenobi ',
          time: '11:12',
        },
        {
          isOwn: false,
          message: 'General Kenobi',
          time: '11:14',
        },
      ],
    }
  },
  mounted() {
    // sicket.io
  },
  middleware: ['auth'],
}
</script>

<style>
* {
  font-family: 'Avenir';
}
ul {
  padding: 0;
  flex: 1 0 auto;
}
li {
  list-style: none;
}
.chat {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.bubbleWrapper {
  padding: 10px 10px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: flex-end;
  color: #fff;
}
.inlineContainer {
  display: inline-flex;
}
.inlineContainer.own {
  flex-direction: row-reverse;
}
.inlineIcon {
  width: 20px;
  object-fit: contain;
}
.ownBubble {
  min-width: 60px;
  max-width: 700px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #5b5377;
  border-radius: 16px 16px 0 16px;
  border: 1px solid #443f56;
}
.otherBubble {
  min-width: 60px;
  max-width: 700px;
  padding: 14px 18px;
  margin: 6px 8px;
  background-color: #6c8ea4;
  border-radius: 16px 16px 16px 0;
  border: 1px solid #54788e;
}
.own {
  align-self: flex-end;
}
.other {
  align-self: flex-start;
}
span.own,
span.other {
  font-size: 14px;
  color: grey;
}
.msger-inputarea {
  display: flex;
  padding: 10px;
  border-top: var(--border);
  background: #eee;
}
.msger-inputarea * {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 1em;
}
.msger-input {
  flex: 1;
  background: #ddd;
}
.msger-send-btn {
  margin-left: 10px;
  background: rgb(0, 196, 65);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.23s;
}
.msger-send-btn:hover {
  background: rgb(0, 180, 50);
}
</style>
