import type { UserType, ListResult, UserFilter } from "./types";
import request from './request'



const me = (): Promise<UserType> => {
    return request.get('users/me');
};

const list = (filter: UserFilter): Promise<ListResult<UserType>> => {
    return request.get("/users", {
        params: filter,
    });
};
export default {
    me,
    list,
};