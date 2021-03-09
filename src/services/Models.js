import IDGenerator from "./IDGenerator"

export default class ListModels {

    constructor() {
        this.generator = new IDGenerator();

        this.getEmptyCard = this.getEmptyCard.bind(this);
        this.getEmptyList = this.getEmptyList.bind(this);
    }

    getEmptyList(name) {
        return { id: this.generator.getID(), name, cards: [] }
    }

    getEmptyCard() {
        return { id: this.generator.getID(), name: "", description: "" }
    }
}