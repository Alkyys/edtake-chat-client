<template>
  <div>
    <div class="bubbleWrapper">
      <div class="inlineContainer">
        <img
          class="inlineIcon"
          src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
        />
        <div class="otherBubble other">
          No ninjas!
        </div>
      </div>
      <span class="other">08:41</span>
    </div>
    <div class="bubbleWrapper">
      <div class="inlineContainer own">
        <img
          class="inlineIcon"
          src="https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png"
        />
        <div class="ownBubble own">
          The first rule of being a ninja is, 'Do no harm.'
        </div>
      </div>
      <span class="own">08:55</span>
    </div>
    <div class="bubbleWrapper">
      <div class="inlineContainer">
        <img
          class="inlineIcon"
          src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
        />
        <div class="otherBubble other">
          Knowing when to leave requires training.
        </div>
      </div>
    </div>
    <span class="other">10:13</span>
    <div class="bubbleWrapper">
      <div class="inlineContainer own">
        <img
          class="inlineIcon"
          src="https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png"
        />
        <div class="ownBubble own">
          Stunned but impressed.
        </div>
      </div>
      <span class="own">11:07</span>
    </div>
    <div class="bubbleWrapper">
      <div class="inlineContainer">
        <img
          class="inlineIcon"
          src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
        />
        <div class="otherBubble other">
          How about throwing stars?
        </div>
      </div>
      <span class="other">11:11</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  font-family: 'Avenir';
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
</style>
