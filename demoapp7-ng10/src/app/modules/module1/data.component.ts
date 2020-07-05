import { StateService } from './../module3/services/state.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-data',
    template: '<h2>module1 data component</h2>'
})
export class DataComponent {
    constructor(
        private stateService: StateService
    ){

    }
}