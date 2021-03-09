export default class IDGenerator {
    getID() {
        return Math.random().toString(32);
    }
}