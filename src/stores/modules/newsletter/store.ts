interface Store {
    loaded: boolean;
    error: any;
    success: string;
    currentNews: any;
}

const store: Store = {
    loaded: false,
    error: {},
    success: '',
    currentNews: {},
};

export default store;
