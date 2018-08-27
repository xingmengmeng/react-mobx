import { observable, action, autorun, computed } from 'mobx';
import { getLogin } from '../fetch/api';
class fetchStore {
    @observable authenticated;
    @observable authenticating;
    @observable items;
    @observable item;

    @observable testval;

    @computed get userName() {
        return this.item && this.item.loginName;
    }

    // 初始化 state
    constructor() {
        this.authenticated = false;
        this.authenticating = false;
        this.items = [];
        this.item = {};

        this.testval = "Hello";
    }

    @action async fetchData(param) {
        let { data } = await getLogin(param);
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
setTimeout(() => {
    fetchS.fetchData({
        userName: 'xingmengmeng',
        userPwd: 'xingmengmeng0212',
        isRemember: true,
        isCookerLogin: false
    });
}, 1000)
//观察改变的过程  一开始就会执行一次
autorun(() => {
    console.log(fetchS.item.loginName);
})
export default fetchS;