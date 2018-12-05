import { observable } from 'mobx';

class User {
    @observable isLogin = true;
    @observable userName = '';
}

const user = new User();

export default user;