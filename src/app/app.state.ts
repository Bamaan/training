import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Light } from './app.model'
import { Injectable } from '@angular/core';
import { AddLight, ToggleLight } from './core/light.actions';

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
    addLight(ctx: StateContext<AppStateModel>, { lightName }: AddLight){
        const { lights } = ctx.getState();
        var highestId = -1;
        lights.forEach(light => { highestId = Math.max(highestId, light.id)});
        ctx.patchState({ lights: [...lights,  {id: highestId + 1, name: lightName, state: false}]});
    }

    @Action(ToggleLight)
    toggleLight(ctx: StateContext<AppStateModel>, { lightId }: ToggleLight){
        const { lights } = ctx.getState();
        ctx.patchState({ lights: [...lights].map(
            light => {
                if (light.id == lightId)
                { 
                    return {
                        ...light,
                        state: !light.state
                    }
                }
            return light;
            })
        });
    }
}