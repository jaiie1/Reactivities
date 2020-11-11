export interface IUser{
    username: string;
    displaynName: string;
    token: string;
    image?: string;
}


export interface IUserFormValues{
    email: string;
    password: string;
    displaynName?: string;
    username?: string;
}


