<script lang="ts" setup>
import { useAppStore, useUserStore } from '@/store';
import { Icon} from 'tdesign-vue-next';
import type {DropdownOption} from 'tdesign-vue-next';
import { useRoute, useRouter } from 'vue-router';
import CollapseButton from '@/components/CollapseButton.vue'

const userStore = useUserStore()
const appStore = useAppStore()

const router = useRouter()
const route = useRoute()


const clickHandler = async ({value}: DropdownOption) => {
    switch (value){
        case'logout':
            await appStore.logout();
            await router.push(`login?redirect=${route.fullPath}`);
            break;
        default:
            throw new Error('Command error')
            
        
    }
}
</script>

<template>
    
    <t-header class="header">
        <CollapseButton v-model:collapse="appStore.menuCollapse"></CollapseButton>
        <div class="operation-area"></div>
        <t-dropdown 
        :options="[{content: 'logout', value: 'logout'}]" 
        @click="clickHandler">
        <t-button variant="text">
            <template #icon>
                <icon name="user"></icon>
            </template>
            {{userStore.currentUser && userStore.currentUser.nickname }}
        </t-button>
        </t-dropdown>
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