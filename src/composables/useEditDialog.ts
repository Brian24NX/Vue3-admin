import type { CellData } from 'tdesign-vue-next';
import { ref, type Ref } from 'vue';
import {MessagePlugin} from 'tdesign-vue-next';
import type {Editable} from '@/api/types';



export const useEditDialog = <T extends {id: string}, R>(api: Editable<R,T>, modelLabel = "") => {

    const showDialog = ref(false);
    const editData = <Ref<T | null>>ref(null);
    const handleCreate = () => {
        showDialog.value = true;
    };

    const handleEdit = (item: CellData<T>) => {
        editData.value = item.row;
        showDialog.value = true;
    };

    const handleConfirm = async (data: R) => {
        if (editData.value && editData.value.id) {
            await api.edit(editData.value.id, data);
            await MessagePlugin.success(`${modelLabel} successfully edited`);
        } else {
            await api.create(data);
            await MessagePlugin.success(`${modelLabel} successfully created`);
        }
        onDialogClose();
    };

    const onDialogClose = () => {
        showDialog.value = false;
        editData.value = null;
    };

    return {
        showDialog,
        editData,
        handleCreate,
        handleEdit,
        onDialogClose,
        handleConfirm,
    };

};