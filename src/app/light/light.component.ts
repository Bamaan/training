import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Light } from '../app.model';
import { RenameLight, ToggleLight } from '../core/light.actions';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})

export class LightComponent implements OnInit {
  @Input() light: Light;
  editMode = true;
  
  constructor(private store: Store) { }
  

  ngOnInit(): void {
  }

  ToggleLight(id: number) {
    this.store.dispatch(new ToggleLight(id));
  }

  RenameLight(id: number, name: string) {
    this.store.dispatch(new RenameLight(id, name));
  }
}
