export enum PermissionEnum {
  DASHBOARD = "dashboard",
  USER = "user",
  USER_LIST = "user:list",
  USER_LIST_CREATE = "user:list:create",
  USER_LIST_EDIT = "user:list:edit",
  USER_ROLES = "user:roles",
  USER_ROLES_CREATE = "user:roles:create",
  USER_ROLES_EDIT = "user:roles:edit",
};

type PermissionsTree = {
  label: string;
  value: string;
  children?: Array<PermissionsTree>;
};

export const permissionsTree: Array<PermissionsTree> = [
  { label: "Console", value: PermissionEnum.DASHBOARD },
  {
    label: "User",
    value: PermissionEnum.USER,
    children: [
      {
        label: "User management",
        value: PermissionEnum.USER_LIST,
        children: [
          { label: "Create user", value: PermissionEnum.USER_LIST_CREATE },
          { label: "Edit user", value: PermissionEnum.USER_LIST_EDIT },
        ],
      },
      {
        label: "Role management",
        value: PermissionEnum.USER_ROLES,
        children: [
          { label: "Create role", value: PermissionEnum.USER_ROLES_CREATE },
          { label: "Edit role", value: PermissionEnum.USER_ROLES_EDIT },
        ],
      },
    ],
  },
];
