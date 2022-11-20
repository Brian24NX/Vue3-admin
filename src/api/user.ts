import type { UserType } from "./types";
import request from './request'



const me = (): Promise<UserType> => {
    return request.get('users/me');   
}

export default {
    me,
};