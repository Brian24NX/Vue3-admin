<script lang="ts" setup>
import { useAppStore, useUserStore } from '@/store';
import { Icon } from 'tdesign-vue-next';
import type { DropdownOption } from 'tdesign-vue-next';
import { useRoute, useRouter } from 'vue-router';
import CollapseButton from '@/components/CollapseButton.vue'

const userStore = useUserStore()
const appStore = useAppStore()

const router = useRouter()
const route = useRoute()


const clickHandler = async ({ value }: DropdownOption) => {
    switch (value) {
        case 'logout':
            await appStore.logout();
            await router.push({
                name: "login",
                params: { redirect: route.fullPath },
            });
            break;
    }
}
</script>

<template>
    <t-header class="header">
        <CollapseButton v-model:collapse="appStore.menuCollapse"></CollapseButton>
        <div class="operation-area">
            <t-dropdown :options="[{ content: 'logout', value: 'logout' }]" :min-column-width="112"
                @click="clickHandler">
                <t-button variant="text">
                    <template #icon>
                        <icon name="user"></icon>
                    </template>
                    {{ userStore.currentUser && userStore.currentUser.nickname }}
                </t-button>
            </t-dropdown>
        </div>
    </t-header>
</template>




<style lang="less" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
}
</style>