import { Component, OnInit } from '@angular/core';
import { Store} from '@ngxs/store';
import { Light } from '../app.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  test = [1, 2, 3];
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log(this.test)
     //this.store.dispatch(new Light()).subscribe((response) => {
    // });
  }

}
