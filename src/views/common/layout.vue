<template>
    <div>
        <t-layout class="main-layout">
            <Sidebar></Sidebar>
            <t-layout>
                <GlobalHeader></GlobalHeader>
                <t-content class="content-layout">
                    <router-view></router-view>
                </t-content>
                <t-footer style="text-align: center">Copyright @ 2022-2023 Brian-Admin</t-footer>
            </t-layout>
        </t-layout>
    </div>
</template>

<script lang="ts" setup>
import GlobalHeader from './header.vue'
import Sidebar from './sidebar.vue'


</script>

<style lang="less" scoped>
.main-layout {
    height: 100vh;

    .content-layout {
        padding: 24px;
        //overflow: hidden;     Using T-card can't do this shit.
    }
}
</style>



