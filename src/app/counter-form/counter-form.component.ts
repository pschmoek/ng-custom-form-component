import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { validateAgeGreaterZeroFactory } from '../age-validator/age-validator';

@Component({
    selector: 'app-counter-form',
    templateUrl: 'counter-form.component.html'
})
export class CounterFormComponent implements OnInit {
    ageForm: FormGroup;
    ageControl: FormControl;

    ngOnInit() {
        this.ageControl = new FormControl(0, validateAgeGreaterZeroFactory());
        this.ageForm = new FormGroup({
            age: this.ageControl
        });
    }
}
