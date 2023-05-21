// import state from "./go_state"
// import mutations from "./go_mutations"
// import actions from "./go_actions"

const state = {
    dataItems: [
        {
            userInfo: {
                userImg: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/th.jpg",
                userName: "萝莉的大叔",
                userTime: "2023-5-5"
            },
            title: {
                type: "精",
                head: "程序员才懂得的段子"
            },
            content: {
                type: "搞笑段子",
                content: "诸葛亮是一个优秀的程序猿，每一个锦囊都是应对不同的case而编写的！但是优秀的程序猿也敌不过更优秀的bug！六出祈山，七进中原，鞠躬尽瘁，死而后已的诸葛亮只因为有一个错误的case-马谡，整个结构就被break了！",
                img: ["https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/Snipaste_2023-05-04_23-22-20.png", "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/Snipaste_2023-05-04_23-20-05.png"]
            }

        },
        {
            userInfo: {
                userImg: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/beatity.jpg",
                userName: "人见人eye",
                userTime: "2023-5-3"
            },
            title: {
                type: "幽默",
                head: "程序员的幽默"
            },
            content: {
                type: "搞笑段子",
                content: "程序猿追求MM不成，含泪追问:我在你眼里算什么？！MM答曰:真人版的windows优化大师……极客哥们莫伤心，小戴安慰递纸巾。",
                img: ["https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/Snipaste_2023-05-04_23-22-20.png"]
            }

        },
        {
            userInfo: {
                userImg: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/OI.jpg",
                userName: "幼儿园老大",
                userTime: "2023-5-1"
            },
            title: {
                type: "精",
                head: "程序员的情绪"
            },
            content: {
                type: "暴躁的程序员",
                content: "【开发时间】项目经理: 如果我再给你一个人,那可以什么时候可以完工？程序员: 3个月吧！项目经理: 那给两个呢？程序员: 1个月吧！项目经理: 那100呢？程序员: 1年吧！项目经理: 那10000呢？程序员: 那我将永远无法完成任务。",
                img: ["https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/Snipaste_2023-05-04_23-22-01.png"]
            }

        },
        {
            userInfo: {
                userImg: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/R-C.jpg",
                userName: "没药了",
                userTime: "2023-5-1"
            },
            title: {
                type: "经典",
                head: "修电脑的程序员"
            },
            content: {
                type: "搞笑段子",
                content: "一个程序员的吐槽：即要被当做修电脑的，也要被当作做网站的；即要被当作杀毒的，也要被当作盗号的。我要告诉大家，其实我们只是写代码的。",
                img: ["https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/Snipaste_2023-05-04_23-22-20.png"]
            }

        }

    ],
    topic: [
        {
            title: "java",
            content: "java永远滴神",
            img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/topic/Snipaste_2023-05-05_00-51-10.png",
            from: "java",
            num:6,
            endTime: "28"
        },{
            title: "程序员吐槽大会",
            content: "我真的不是修电脑的，为什么不相信我",
            img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/topic/Snipaste_2023-05-05_00-47-11.png",
            from: "吐槽",
            endTime: "26",
            num:2,
        },{
            title: "人工智能的趣味",
            content: "I和机器学习的应用范围非常广泛",
            img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/topic/Snipaste_2023-05-05_00-49-42.png",
            from: "人工智能",
            endTime: "22",
            num:5,


        },{
            title: "大功告成",
            content: "拍下大功告成的一瞬间，叉腰自豪仰天笑",
            img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/topic/Snipaste_2023-05-05_00-49-21.png",
            from: "大事一件",
            endTime: "17",
            num:1,

        },{
            title: "程序员的梦想",
            content: "就算是咸鱼也会有自己的梦想",
            img: "https://buckettao.oss-cn-chengdu.aliyuncs.com/%E8%AE%BA%E5%9D%9B/topic/Snipaste_2023-05-05_00-48-54.png",
            from: "程序猿的梦想",
            endTime: "10",
            num:11,
        },
    ]
}
const actions = {
    addPerson() {
        console.log(123);
    }
}
const mutations = {}
const go_module = {
    namespaced: true,
    state,
    mutations,
    actions
}
export default go_module