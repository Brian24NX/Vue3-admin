<template>


<div>
    <t-layout class="main-layout">
        <Sidebar></Sidebar>
        <t-layout>
            <GlobalHeader></GlobalHeader>
            <t-content>
                <router-view></router-view>
            </t-content>
            <t-footer>Footer</t-footer>
        </t-layout>
    </t-layout>
</div>
</template>

<script lang="ts" setup>
import GlobalHeader from './header.vue'
import Sidebar from './sidebar.vue'


</script>

<style lang="less" scoped>

.main-layout{
    height: 100vh;
}

</style>



