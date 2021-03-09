export default class LocaleStorage {
    constructor() {
        this.storagePrefix = "__todoBoard";

        this.setItem = this.setItem.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    setItem(value) {
        window.localStorage.setItem(this.storagePrefix, JSON.stringify(value));
    }

    getItem() {
        return JSON.parse(window.localStorage.getItem(this.storagePrefix))
    }
}