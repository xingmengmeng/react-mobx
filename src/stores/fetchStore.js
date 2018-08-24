import { observable, action, autorun } from 'mobx';
import { post } from '../fetch/http';
class fetchStore {
    @observable authenticated;
    @observable authenticating;
    @observable items;
    @observable item;

    @observable testval;

    // 初始化 state
    constructor() {
        this.authenticated = false;
        this.authenticating = false;
        this.items = [];
        this.item = {};

        this.testval = "Hello";
    }

    @action async fetchData(pathname, param) {
        const fetchURL = pathname;
        let { data } = await post(fetchURL, param);
        data && data.length > 0 ? this.setData(data) : this.setSingle(data);
    }

    @action setData(data) {
        this.items = data;
    }

    @action setSingle(data) {
        this.item = data;
    }
}

const fetchS = new fetchStore();
fetchS.fetchData('/biGraph/login/dologin.gm', {
    userName: 'xingmengmeng',
    userPwd: '12345678',
    isRemember: false,
    isCookerLogin: false
});
autorun(() => {
    console.log(fetchS.item);
})
export default fetchS;