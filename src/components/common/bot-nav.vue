<!-- 不用 -->

<template>
  <div id="bottom_nav">
    <textarea type="text" placeholder="文明发帖" id="userText" @focus="inputText" @focusout="leaveFocus"></textarea>
    <div v-if="isInput" class="bottom_nav--right">
      <div class="img_box">
        <img src="../../../static/img/words.png" alt="">
        <span id="tip">1</span>
      </div>
      <div class="img_box" @click="changeIsLike">
        <img v-if="isLike" src="../../../static/img/like_active.png" alt="">
        <img v-else src="../../../static/img/like.png" alt="">
        <span id="tip">{{ zhan }}</span>
      </div>
      <div class="img_box" @click="changeIsStar">
        <img v-if="isStar" src="../../../static/img/star.png" alt="">
        <img v-else src="../../../static/img/star_active.png" alt="">
      </div>
    </div>
    <button v-else id="publish">发表</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLike: false,
      isInput: true,
      isStar: false,
      zhan: 0
    }
  },
  methods: {
    changeIsLike() {
      this.isLike = !this.isLike
      console.log(this.isLike);
      if (this.isLike==true)
        ++this.zhan;
      else
        --this.zhan;
    },
    changeIsStar() {
      this.isStar = !this.isStar
    },
    // input框家焦点
    inputText() {
      this.isInput = !this.isInput
    },
    leaveFocus() {
      this.isInput = !this.isInput
    }
  },
}

</script>

<style scoped>
#userText {
  padding: 0.2rem 0.5rem;
  resize: none;
  font-size: smaller;
  border-radius: 0.4rem;
  border: 1px solid #e4e4e5;
  outline-style: none;
  word-break: break-all;
  outline: none;
}

#userText:focus {
  display: block;
  height: 3rem;
  width: 70%;
  padding: 0;
  margin: 0 1rem;
}

#userText:focus #bottom_nav {
  padding-right: 2rem;
}

img {
  height: 100%;
  width: 100%;
}

#bottom_nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.3rem;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  z-index: 7;
  border-top: .1rem solid #fafafa;
  box-sizing: border-box;
}

.bottom_nav--right {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-self: center;
}

.img_box {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
}

.img_box:nth-child(3) {
  margin-right: 5px;
}

#tip {
  position: absolute;
  width: fit-content;
  font-size: 0.6rem;
  top: 0;
  right: 0;
  transform: translate(100%, -50%);
  background-color: #fff;
}

#publish {
  height: fit-content;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 0.4rem;
  align-self: self-end;
}
</style>