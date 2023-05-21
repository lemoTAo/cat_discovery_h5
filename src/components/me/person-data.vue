<template>
  <div class="outer">
    <childNav />

    <button @click="submit" id="save">保存</button>
    <section class="content">
      <div class="head__picture">
        <img :src="personInfo.profile" alt="" ref="img">
        <div class="camera">
          <input type="file" accept="image/*" id="image" style="display: none;" @change="changeImage" ref="getImage">
          <label for="image" class="label_img">
            <img src="../../../static/img/me/camera.png" alt="">
          </label>
        </div>
      </div>

      <div class="base_info">
        <div class="row">
          <div class="row-3-1">用户名</div>
          <div class="row-3-2"><input type="text" name="username" autocomplete="off" v-model="personInfo.user_name"></div>
        </div>
        <div class="row" @click="show = !show">
          <div class="row-3-1">性别</div>
          <div class="row-3-2">
            <span>{{ personInfo.sex }}
            </span>
            <span class="row-3-2--right">&gt;</span>
          </div>
        </div>
        <div class="row">
          <div class="row-3-1">年龄</div>
          <div class="row-3-2">
            <input type="text" name="age" autocomplete="off" v-model="personInfo.age">
          </div>
        </div>
        <div class="row" @click="show2 = !show2">
          <div class="row-3-1">学习阶段</div>
          <div class="row-3-2">
            <span>{{ personInfo.type }}
            </span>
            <span class="row-3-2--right">&gt;</span>
          </div>
        </div>
        <div class="row">
          <div class="row-3-1">简介</div>
          <div class="row-3-2">
            <span class="introduce_box">{{ personInfo.user_desc }}</span>
            <textarea @input="inputText" ref="inputText" class="textarea" placeholder="个人简介不超100个字"
              v-model="personInfo.user_desc"></textarea>
          </div>
        </div>
      </div>

      <van-popup v-model="show" position="bottom" :style="{ height: '15%' }">
        <div class="gender-choose1" @click="chooseGender('男')">男</div>
        <div class="gender-choose1" @click="chooseGender('女')">女</div>
      </van-popup>
      <van-popup v-model="show2" position="bottom" :style="{ height: '20%' }">
        <div class="gender-choose" @click="choseType('入门')">入门</div>
        <div class="gender-choose" @click="choseType('进阶')">进阶</div>
        <div class="gender-choose" @click="choseType('专家')">专家</div>
      </van-popup>
    </section>
  </div>
</template>

<script>
import childNav from '../common/child-nav.vue'
import { mapState } from 'vuex'
import { Toast } from 'vant';

export default {
  data() {
    return {
      introduction: "root",
      imgBase64: '',
      show: false,
      show2: false,
      personInfo: {
        user_name: '',
        sex: '',
        age: '0',
        profile: '',
        user_desc: 'none',
        type: ""

      }
    }
  },
  computed: {
    ...mapState('me', ['userInfo'])
  },
  components: {
    childNav
  },
  methods: {
    changeImage() {
      const files = this.$refs.getImage.files[0]
      if (files.size) {
        const _this = this
        let reader = new FileReader();
        //新建 FileReader 对象
        reader.onload = function () {
          // 当 FileReader 读取文件时候，读取的结果会放在 FileReader.result 属性中
          console.log(reader.result);
          _this.$refs.img.src = reader.result
          _this.personInfo.profile = reader.result
        };
        // 设置以什么方式读取文件，这里以base64方式
        reader.readAsDataURL(files);
      }
    },
    async submit() {
      const { sex, user_name, age, user_desc, profile, type } = this.personInfo
      let data = {}
      if (sex !== this.userInfo.sex)
        data.sex = sex
      if (user_name !== this.userInfo.user_name)
        data.user_name = user_name
      if (age !== this.userInfo.age)
        data.age = age
      if (user_desc !== this.userInfo.user_desc)
        data.user_desc = user_desc
      if (profile !== this.userInfo.profile)
        data.profile = profile
      if (type !== this.userInfo.type)
        data.type = type
      try {
        // const result = await this.$store.dispatch('me/UpdateUserInfo', data)
        // if (result == 'ok') { Toast.success('保存成功'); }
        if (true) { Toast.success('保存成功'); }
        else { Toast.fail('保存失败'); }

      } catch (e) {
        console.log(e);
      }

    },
    inputText() {
      this.personInfo.user_desc = this.personInfo.user_desc.substring(0, 100)
    },
    chooseGender(e) {
      this.personInfo.sex = e
    },
    choseType(e) {
      this.personInfo.type = e
    }
  },
  mounted() {
    this.personInfo = this.userInfo
  }

}
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 1.3rem;
}

input {
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  font-size: 1.5rem;
  background-color: transparent;
}


.outer {
  display: flex;
  padding-top: 3rem;
  /* width: 100%; */
}

.content {
  width: 100%;
  padding: 0px 2rem;
}

.content>.head__picture {
  position: relative;
  margin: 4rem auto;
  width: 7rem;
  height: 7rem;
  /* overflow: hidden; */
}

.content>.head__picture>img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-position: center;
}


.camera {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(50%, 20%);
}

.label_img {
  display: inline-block;
  width: 3rem;
  height: 2.5rem;
  z-index: 999;
}

.label_img>img {
  height: 100%;
  width: 100%;
}

#save {
  position: fixed;
  top: 1.5rem;
  right: 1rem;
  padding: .3rem .6rem;
  border-radius: 0.6rem;
  transform: translateY(-50%);
  border: none;
  background-color: #e8e8e8;
  z-index: 99;

}

.base_info {
  width: 100%;
}

.base_info .row {
  width: 100%;
  padding: 1rem 0;
  margin: .5rem 0;
  border-bottom: 1px solid #cdcdcd;
}

.base_info .row:last-child {

  border-bottom: none;
  display: flex;
}

.base_info .row .row-3-1 {
  display: inline-block;
  height: 100%;
  width: calc((100% - 4rem)/ 3);
  margin-right: 1rem;
}

.row>[class^="row-"] {
  font-size: 1.5rem;
  padding: .5rem 0;
}

.base_info .row .row-3-2 {
  position: relative;
  display: inline-block;
  height: 100%;
  width: calc(((100% - 6rem)/ 3) * 2 + 3rem);
}

.row-3-2--right {
  position: absolute;
  top: 0;
  right: 0;
  color: grey;
  transform: translate(-50%, 50%);
}

.row-3-2:last-child {
  position: relative;
  height: fit-content;
}

.introduce_box {
  display: inline-block;
  color: transparent;
  width: 100%;
  height: 100%;
  z-index: -1;
  word-break: break-all;
}

.textarea {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  resize: none;
  outline: none;
  border: none;
  background-color: transparent;
  z-index: 999;
}

.gender-choose1 {
  display: flex;
  align-items: center;
  height: calc(100% / 2);
  padding: 1rem 1rem;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
}

.gender-choose1:active {
  background-color: #e8e8e8;

}

.gender-choose1:last-child {
  border-bottom: none
}

.gender-choose {
  display: flex;
  align-items: center;
  height: calc(100% / 3);
  padding: 1rem 1rem;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
}

.gender-choose:active {
  background-color: #e8e8e8;

}

.gender-choose:last-child {
  border-bottom: none
}
</style>>