import { configure } from 'mobx';
import { createContext } from 'react';
import ActivityStore from './activityStore';
import CommonStore from './commonStore';
import UserStore from './userStore';
import ModalStore from './modelStore';

configure({enforceActions: 'always'});


export class RootStore {
    activityStore: ActivityStore;
    userStore: UserStore;
    commenStore: CommonStore;
    modalstore: ModalStore;

    constructor(){
        this.activityStore = new ActivityStore(this);
        this.userStore = new UserStore(this);
        this.commenStore = new CommonStore(this);
        this.modalstore = new ModalStore(this);
    }
}


export const RootStoreContext = createContext(new RootStore());