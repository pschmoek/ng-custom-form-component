import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CounterComponent),
        multi: true
    }]
})
export class CounterComponent implements OnInit, ControlValueAccessor {
    private _value: number;
    private onChange = (val: number) => {};
    private onTouched = () => {};

    constructor() { }

    get value(): number {
        return this._value;
    }
    set value(v: number) {
        this._value = v;
        this.onChange(v);
        this.onTouched();
    }

    up(): void {
        this.value++;
    }

    down(): void {
        this.value--;
    }

    ngOnInit() { }

    writeValue(value: number): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
