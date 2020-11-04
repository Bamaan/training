import { State } from '@ngxs/store';

export class AppStateModel {
    lights: boolean[];
}

@State<AppStateModel>({
    name: 'Home',
    defaults: {
        lights: []
    }
})

export class AppState {}