export type TokenRequest = {
    username : string,
    password : string,
};

export type ErrorResponse = {
    code : string,
    message: string,
};

export type UserType = {
    id: string;
    username: string;
    nickname: string;
    roles: Array<string>;
    permissions: Array<string>;
};