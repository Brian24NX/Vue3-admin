import { defineStore } from "pinia";
import type { UserType } from "@/api/types";
import userApi from "@/api/user";
import { usePermissionStore } from "./permission";

type UserState = {
    currentUser: UserType | null;
};

export const useUserStore = defineStore("user", {
    state: (): UserState => {
        return {
            currentUser: null,
        };
    },
    persist: true,
    actions: {
        async fetchCurrentUser() {
            this.currentUser = await userApi.me();     // Get user (me)
            // To do: Super admin
            usePermissionStore().generateRoutes(this.currentUser.permissions);
        }
    }
})

