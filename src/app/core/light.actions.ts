import { Light } from '../app.model';

export class AddLight {
  static readonly type = '[Home] Add Light';
  constructor(public lightName: string) { }
}

export class RenameLight {
  static readonly type = '[Home] Rename Light';
  constructor(public lightId: number, public lightName: string) { }
}

export class ToggleLight {
  static readonly type = '[Home] Toggle Light';
  constructor(public lightId: number) { }
}