<script lang="ts" setup>
import { Icon } from 'tdesign-vue-next';
import { useAppStore } from "@/store";
const appStore = useAppStore();

</script>



<template>
<t-aside :width="appStore.menuCollapse ? '64px' : '232px'">
    <t-menu :collapsed="appStore.menuCollapse">
        <t-menu-item value="0">
            <template #icon>
                <icon name="dashboard" />
            </template>
            Dashboard
        </t-menu-item>
    </t-menu>
</t-aside>

</template>


<style lang="less" scoped>

</style>


