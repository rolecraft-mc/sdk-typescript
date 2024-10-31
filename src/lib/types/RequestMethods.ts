export enum RequestMethods {
    Delete = 'DELETE',
    Get = 'GET',
    Patch = 'PATCH',
    Post = 'POST',
    Put = 'PUT'
}
export type Method = `${RequestMethods}`
export default Method;