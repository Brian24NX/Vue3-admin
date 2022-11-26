import type { UserType, ListResult, UserFilter, UserCreateRequest } from "./types";
import request from './request'



const me = (): Promise<UserType> => {
    return request.get('users/me');
};

const list = (filter: UserFilter): Promise<ListResult<UserType>> => {
    return request.get("/users", {
        params: filter,
    });
};

const create = (userCreateRequest: UserCreateRequest): Promise<UserType> => {
    return request.post("/users", userCreateRequest);
};

const edit = (id: string, userEditRequest: UserCreateRequest): Promise<UserType> => {
    return request.post(`/user/${id}`, userEditRequest);
};


export default {
    me,
    list,
    create,
    edit,
};