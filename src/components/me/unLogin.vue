<template>
    <div class="outer">
        <header class="child-nav" style="background-color: transparent;">
            <img src="static/img/left.png" class="child-nav_back" @click="$router.go(-1)">
        </header>
        <div class="bacgroudImg">

            <div class="my-login-box" id="login" ref="login">
                <h2>登录</h2>
                <form>
                    <div class="user-box">
                        <label>用户名</label><br>
                        <input type="text" name="" required v-model="login.username" placeholder="请输入账号">
                    </div>
                    <div class="user-box">
                        <label>密码</label><br>
                        <input type="password" name="" required autocomplete="off" v-model="login.password"
                            placeholder="请输入密码">
                    </div>

                    <div class="flex__be">
                        <a href="javascript:;" @click="userLogin">
                            登录
                        </a>
                    </div>
                    <a href="#" @click="change" class="rightBottom" id="re">
                        注册账号
                    </a>

                </form>
            </div>

            <div class="my-login-box" id="signup" ref="signup">
                <h2>用户注册</h2>
                <form>
                    <div class="user-box">
                        <label>用户名</label><br>
                        <input type="text" name="" required v-model="register.username" placeholder="请输入用户名">
                    </div>
                    <div class="user-box">
                        <label>密码</label><br>
                        <input type="password" name="" required autocomplete="off" v-model="register.password"
                            placeholder="必须为字母加数字且长度不小于8位">
                    </div>

                    <div class="flex__be">
                        <a href="#" @click="userRegister">
                            注册
                        </a>
                    </div>
                    <a href="#" @click="change" id="lo" class="rightBottom"> 已有账号</a>
                </form>
            </div>
        </div>

        <!-- 提示 -->
        <transition name="Fade">
            <div class="backGround" ref="tip" v-show="this.tip.isTip" :style="{ color: this.tip.color }">
                {{ tip.content }}
            </div>
        </transition>
    </div>
</template>

<script>
import { CheckPassWord } from '../../utils/regular.js'
import childNav from '../common/child-nav.vue'
export default {
    data() {
        return {
            // 翻转控制
            isFan: true,
            // 登录
            login: {
                username: "",
                password: ""
            },
            register: {
                username: "",
                password: "",
            },
            tip: {
                isTip: false,
                content: "用户名或密码错误",
                color: "red"
            },
            date: {
                last: "",
                now: ""
            }
        }
    },
    components: {
        childNav
    },
    methods: {
        change() {
            if (this.isFan) {
                // 二者翻转
                this.$refs.signup.style.transform = "rotateY(0)"
                this.$refs.login.style.transform = "rotateY(180deg)"
                // 调整二者的可视化
                this.$refs.signup.style.backfaceVisibility = "visible";
                this.$refs.login.style.backfaceVisibility = "hidden";
            }
            else {
                this.$refs.login.style.transform = "rotateY(0)";
                this.$refs.signup.style.transform = "rotateY(180deg)"
                this.$refs.signup.style.backfaceVisibility = "hidden";
                this.$refs.login.style.backfaceVisibility = "visible";
            }
            this.isFan = !this.isFan
        },
        async userLogin() {
            const { username, password } = this.login
            if (username.trim() != "" && password.trim() != "") {
                try {
                    await this.$store.dispatch('me/loginAndGetToken', { user_name: username, password });
                    this.tip.content = "登录成功";
                    this.tip.color = "#3fc291";
                    window.setTimeout(() => {
                        this.$router.push({
                            path: '/me',
                        })
                    }, 800)
                }
                catch (e) {
                    this.tip.content = "用户名或密码错误";
                    this.showToast()

                    console.log(e);
                }
                this.showToast()


            } else if (username.trim() == "" && password.trim() == "") {
                this.tip.content = "请输入用户名和密码";
                this.showToast()
            }
        },
        async userRegister() {
            const { username, password } = this.register
            if (username.trim() != '' && password != '') {
                // CheckPassWord(password)
                if (password) {
                    try {
                        const result = await this.$store.dispatch('me/register', { user_name: username, password })
                        this.tip.content = result;
                        this.tip.color = "#3fc291";
                        //注册成功跳转登录
                        this.change()

                    }
                    catch (e) {
                        {
                            this.tip.content = e
                            this.tip.color = 'red'
                        }
                    }
                }

            }
            else
                this.tip.content = "用户名或密码错误"
            this.showToast()

        },
        // 显示弹窗,
        showToast() {
            // 禁止用户频繁点击
            let { last, now } = this.date
            now = Date.now()
            if (now - last > 2000) {
                this.date.last = Date.now()
                this.showTip()
                const _this = this
                setTimeout(() => {
                    _this.showTip();
                }, 500)
            }
        },
        showTip() {
            this.tip.isTip = !this.tip.isTip
        },
        //键盘按钮截获
        keyDown() {
            document.onkeydown = e => {
                if (e.key == 'Enter') {
                    this.userLogin()
                    e.preventDefault()
                }
            }
        },
        goME() {
            console.log(1);
            this.$router.push({
                path: '/index/home'
            })
        }
    },
    created() {
        this.keyDown()
    },
    beforeDestroy() {
        // this.keyDownReview()
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.bacgroudImg {
    position: relative;
    top: -5%;
    left: 0;
    height: 46rem;
    width: 170%;
    background: url(/static/img/login_background.png) no-repeat;
    background-size: contain;
    transform: translateX(-20%) translateY(-10%);
    z-index: 1;
}

.outer {
    position: relative;
    height: 100vh;
    box-sizing: border-box;
    background-color: #f6f6f6;
    overflow: hidden;
}

.outer>.child-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 8;
    background: white;
    height: 3rem;
    text-align: center;
}

.flex__be {
    display: flex;
    justify-content: center;
}

#signup {
    transform: rotateY(-180deg);
    backface-visibility: hidden;
}


.rightBottom {
    position: absolute !important;

    right: 0;
    bottom: 0;
    font-size: 1rem !important;
}

.bacgroudImg>.my-login-box {

    position: absolute;
    top: 45%;
    left: 22%;
    bottom: -5%;
    width: 46%;
    padding: 4rem 2rem 4rem;
    color: black;
    /* margin-left: -48%; */
    /* margin-top: -70%; */
    background-color: #ffffff;
    /* box-shadow: 0 1rem 2rem rgba(0, 0, 0, .3); */
    border-radius: 1rem;
    -webkit-transition: all 1s;
    transition: all 1s;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    z-index: 99;
    height: 65%;
}

.my-login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    text-align: center;
}

.my-login-box .user-box {
    position: relative;
}

.my-login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    background: transparent;
    margin-top: 1.3rem;

    padding: 1rem 0;
    border-bottom: 1px solid #e4e4e4;
}

.my-login-box .user-box input::placeholder {
    color: #c7c7c7;
}

.my-login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
    color: #000;

}


.my-login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
}

.my-login-box form a:nth-child(1) {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    margin-top: 40px;
    background-color: #40527c;
    width: 98%;
    text-align: center;
    border-radius: 2rem;
    font-size: 1.5rem;
    color: #fff;
}

.my-login-box a:hover {
    /* background: #03e9f4; */
    color: #fff;
    border-radius: 5px;
}

.my-login-box a span {
    position: absolute;
    display: block;
}

.my-login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }

    50%,
    100% {
        left: 100%;
    }
}

.my-login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    /* animation: btn-anim2 1s linear infinite; */
    /* animation-delay: .25s */
}

@keyframes btn-anim2 {
    0% {
        top: -100%;
    }

    50%,
    100% {
        top: 100%;
    }
}

.my-login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    /* animation: btn-anim3 1s linear infinite; */
    /* animation-delay: .5s */
}

@keyframes btn-anim3 {
    0% {
        right: -100%;
    }

    50%,
    100% {
        right: 100%;
    }
}

.my-login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    /* animation: btn-anim4 1s linear infinite; */
    /* animation-delay: .75s */
}

@keyframes btn-anim4 {
    0% {
        bottom: -100%;
    }

    50%,
    100% {
        bottom: 100%;
    }
}

.backGround {
    display: inline-block;
    position: absolute;
    padding: 0.4rem 0.7rem;
    top: 50%;
    left: 50%;
    background: #efefef;

    border-radius: 0.2rem;
    transform: translateX(-50%);
    z-index: 999;
}

.Fade-enter,
.Fade-leave-to {
    opacity: 0;
}

.Fade-enter-to,
.Fade-leave {
    opacity: 1;
}

.Fade-enter-active,
.Fade-leave-active {
    transition: all .2s;
}
</style>