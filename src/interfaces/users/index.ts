export interface IUser {
    id: number;
    email: string;
    name: string;
    password: string;
}

export interface IUserCreate {
    name: string;
    email: string;
    password: string;
}