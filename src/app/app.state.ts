import { State, Selector } from '@ngxs/store';
import { Light } from './app.model'
import { Injectable } from '@angular/core';

export class AppStateModel {
    lights: Light[];
}

@State<AppStateModel>({
    name: 'Home',
    defaults: {
        lights : [
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
        ]
    }
})

@Injectable()
export class AppState {
    @Selector() static lights(state: AppStateModel) { return state.lights; }
}