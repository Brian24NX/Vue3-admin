<template>
  <t-card>
    <div class="action-area">
      <t-button v-permission="PermissionEnum.USER_LIST_CREATE" @click="handleCreate">
        Create User
      </t-button>
    </div>
    <div class="search-area">
      <t-input class="search-input" v-model="searchKey.name" placeholder="Please type your Username">
      </t-input>
      <t-button @click="fetchData">
        <template #icon>
          <icon name="search"></icon>
        </template>
      </t-button>
    </div>
    <t-table :loding="loading" rowKey="index" :columns="columns" :data="data" :pagination="pagination"
      @page-change="onPageChange">
      <template #operation="slotProps">
        <t-button v-permission="PermissionEnum.USER_LIST_EDIT" variant="text" theme="primary"
          @click="handleEdit(slotProps)">
          <icon name="edit"></icon>
          Edit
        </t-button>
      </template>
    </t-table>
  </t-card>
  <edit-dialog :show="showDialog" :data="editData" @close="onDialogClose" @confirm="handleConfirm"></edit-dialog>
</template>
  
<script lang="ts" setup>
import { PermissionEnum } from '@/config/permission.config'
import { Icon } from 'tdesign-vue-next';
import { useSearch } from "@/composables/useSearch";
import userApi from '@/api/user'
import { reactive } from 'vue';
import type { UserCreateRequest, UserType } from '@/api/types';
import EditDialog from './edit-dialog.vue';
import { useEditDialog } from '@/composables/useEditDialog';

const columns = [
  { colKey: "id", title: "ID" },
  { colKey: "username", title: "Username" },
  { colKey: "nickname", title: "Nickname" },
  { colKey: "roles", title: "Roles" },
  { colKey: "operation", title: "Operation" },
];

const searchKey = reactive({
  name: '',
});

const { data, fetchData, pagination, loading, onPageChange } = useSearch<
  UserType,
  {
    name: string;
  }
>(userApi, searchKey);

const defaultData: UserType = {
  id: '',
  username: '',
  nickname: '',
  roles: [],
  permissions: [],
}


const { showDialog, editData, handleCreate, handleEdit, onDialogClose, handleConfirm } =
  useEditDialog<UserType, UserCreateRequest>(userApi, 'User');


</script>
  
<style lang="less" scoped>

</style>