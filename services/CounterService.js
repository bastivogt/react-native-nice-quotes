import { BaseService } from "./BaseService";

export class CounterService extends BaseService {
  constructor(count = 0) {
    super();
    this._count = count;
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this._emitUpdate();
  }

  increment(step = 1) {
    this.count += step;
  }

  decrement(step = 1) {
    this.count -= step;
  }
}
