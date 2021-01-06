import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, Select} from '@ngxs/store';
import { Light } from '../app.model'
import { AddLight, ToggleLight } from '../core/light.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  @Select(AppState.lights) lights$: Observable<Light[]>;
  constructor(private store: Store) {}

  ngOnChanges(changes){
    console.log(changes);
  }

  ngOnInit(): void {
  }

  AddLight(name: string){
    //this.store.dispatch(new AddLight({id: 5, name: name, state: false}));
    this.store.dispatch(new AddLight(name));
  }

  ToggleLight(id){
    this.store.dispatch(new ToggleLight(id));
  }
}
