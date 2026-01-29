export class BaseService {
    constructor() {
        this.onUpdate;
    }

    _emitUpdate() {
        if(typeof this.onUpdate === "function") {
            this.onUpdate();
        }
    }
}