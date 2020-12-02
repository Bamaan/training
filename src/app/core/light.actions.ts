import { Light } from '../app.model';

export class AddLight {
    static readonly type = '[Home] Add Light';
    constructor(public light: Light) {}
  }