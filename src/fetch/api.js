import { post } from './http';
export const getLogin = param => {
    return post('/biGraph/login/dologin.gm', param);
}