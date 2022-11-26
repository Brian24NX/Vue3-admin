<template>
    <t-dialog  ref="dialog" width="900px" :visible="visible" :header="user.id ? 'Edit User' : 'Create User'" 
    @close="$emit('close')" 
    @confirm="handleConfirm">
        <t-form ref="form" :data="user" :rules="rules">
            <t-form-item label="Username" name="username">
                <t-input placeholder="Please type your Username" v-model="user.username" />
            </t-form-item>
            <t-form-item label="Nickname" name="nickname">
                <t-input placeholder="Please type your Nickname" v-model="user.nickname" />
            </t-form-item>
            <t-form-item label="Roles" name="roles">
                <t-select v-model="user.roles" :options="options" clearable multiple>
                </t-select>
            </t-form-item>
        </t-form>
    </t-dialog>
</template>

<script lang="ts" setup>

import { computed, ref, watch } from "vue";
import type { UserType } from "@/api/types";
import type { Ref } from "vue";


interface Props {
    show: boolean;
    data: UserType | null;
}

const props = withDefaults(defineProps<Props>(), {
    show: false,
});

const rules = {
    username: [{ required: true, message: "Username can not be empty!", trigger: "blur" }],
    nickname: [{ required: true, message: "Nickname can not be empty!", trigger: "blur" }],
};

const options = computed(() => {
    return [
        { label: "Administrator", value: "ROLE_ADMIN" },
        { label: "Common User", value: "ROLE_USER" },
    ];
});


const defaultData: UserType = {
    id: '',
    username: '',
    nickname: '',
    roles: [],
    permissions: [],
};

const user: Ref<UserType> = ref(props.data || defaultData);  

watch(props, (newValue) => {
    user.value = newValue.data || defaultData; 
});

const emit = defineEmits(['close',"confirm"])

const visible = computed(() => props.show)

const form = ref(null);

const handleConfirm = () => {
    emit('confirm',user.value);
};


</script>




<style lang="less" scoped>

</style>

