import { observable, action } from 'mobx';
class clickTimeStore {
    @observable times = 0;
    @action click = (Increment) => {
        this.times += Increment;
    }
}

const clickTime = new clickTimeStore();
export default clickTime;