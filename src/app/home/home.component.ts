import { Component, OnInit, OnChanges } from '@angular/core';
import { Store} from '@ngxs/store';
import { Light } from '../app.model'
import { AddLight } from '../core/light.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
 
  lights = [
    {
        id: 1,
        name: "center",
        state: false
    },
    {
        id: 2,
        name: "window",
        state: false
    },
    {
        id: 3,
        name: "kitchen",
        state: false
    }
  ];

  constructor(private store: Store) {}

  ngOnChanges(changes){
    console.log(changes);
  }

  ngOnInit(): void {
  }

  AddLight(name: string){
    console.log("Button clicked");
    this.lights.push({id: 5, name: name, state: false});
  }
}
