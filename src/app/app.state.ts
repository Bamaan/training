import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Light } from './app.model'
import { Injectable } from '@angular/core';
import { AddLight } from './core/light.actions';
import { RouteConfigLoadEnd } from '@angular/router';

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

    @Action(AddLight)
    addLight(ctx: StateContext<AppStateModel>, { light }: AddLight){
        var current = ctx.getState().lights;
        console.log(light);
        ctx.patchState({ lights: [...current, light]});
        current = ctx.getState().lights;
        console.log(current);
    }
}