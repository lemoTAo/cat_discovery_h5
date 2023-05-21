const mixin = {
    mounted() {
        this.$store.commit("message/setPageName", this.pageName)
    },
    activated() {
        this.$store.commit("message/setPageName", this.pageName)
    }
}
export default mixin