import { Component, OnInit, Input } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-counter-form-control',
    templateUrl: 'counter-form-control.component.html'
})
export class CounterFormControlComponent {
    @Input() control: FormControl;
    @Input() label: string;
}
