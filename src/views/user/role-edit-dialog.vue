<template>
    <t-dialog ref="dialog" width="900px" :visible="visible" :header="role.id ? 'Edit Role' : 'Create Role'"
        @close="$emit('close')" @confirm="handleConfirm">
        <t-form ref="form" class="dialog-form" :data="role" :rules="rules">
            <t-form-item label="Role name" name="name">
                <t-input v-if="role.id" disabled :value="role.name"></t-input>
                <t-input v-if="!role.id" placeholder="Please type your Role Name" v-model="role.name" />
            </t-form-item>
            <t-form-item label="Role label" name="label">
                <t-input placeholder="Please type your Role Label" v-model="role.label" />
            </t-form-item>
            <t-form-item label="Permission group" name="permissions">
                <t-tree :data="permissionsTree" hover expand-all :checkable="true" value-mode="all"
                    v-model="role.permissions" />
            </t-form-item>
        </t-form>
    </t-dialog>
</template>
  
<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import type { RoleType } from "@/api/types";
import type { Ref } from "vue";
import { permissionsTree } from "@/config/permission.config";

interface Props {
    show: boolean;
    data: RoleType | null;
}

const props = withDefaults(defineProps<Props>(), {
    show: false,
});

const rules = {
    name: [{ required: true, message: "Role Name can not be empty!", trigger: "blur" }],
  //label:
};

const defaultData: RoleType = {
    id: "",
    name: "",
    label: "",
    permissions: [],
};

const role: Ref<RoleType> = ref(props.data || defaultData);

watch(props, (newValue) => {
    role.value = newValue.data || defaultData;
});

const emit = defineEmits(["close", "confirm"]);

const visible = computed(() => props.show);


const form = ref(null);

const handleConfirm = () => {
    emit("confirm", role.value);
};
</script>
  
<style lang="less" scoped>

</style>