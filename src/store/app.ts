
import { defineStore } from "pinia";
import type { TokenRequest } from '@/api/types';
import tokenApi from '@/api/token';
import { useUserStore } from './user';

type AppState = {
    token: string,
    menuCollapse: boolean,
};

export const useAppStore = defineStore('app', {
    state: (): AppState=> {
        return {
          token: '',
          menuCollapse: false,
        };
    },
    persist: true,               //  Stay status-quo
    actions: {
        async login(loginForm: TokenRequest): Promise<void> {
            this.token = await tokenApi.createToken(loginForm);         // Get token
        },
        async logout(): Promise<void> {
            const userStore = useUserStore();
            this.token = '';
            userStore.$reset();                                         // Discard token
        }
    }
});

