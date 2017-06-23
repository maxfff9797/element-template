<template>
    <div id="app">
        <top-bar></top-bar>
            <side-bar>
            </side-bar>
    </div>
</template>

<script>
    import SideBar from './components/SideBar.vue'
    import TopBar from './components/TopBar.vue'
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created(){
          this.$store.commit('increment')
            console.log(this.$store.state.count)
        },
        components: {
            SideBar,
            TopBar
        }
    }
</script>

<style lang="scss">
    @import "assets/style/global";
    @import "../node_modules/element-ui/lib/theme-default/index.css";
</style>
