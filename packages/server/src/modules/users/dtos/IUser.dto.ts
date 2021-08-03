export default interface IUser {
    _id?: string,
    email: string,
    password: string
    admin?: boolean
    class?: boolean
};