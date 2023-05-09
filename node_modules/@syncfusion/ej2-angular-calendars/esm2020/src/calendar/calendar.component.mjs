var CalendarComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Calendar } from '@syncfusion/ej2-calendars';
import * as i0 from "@angular/core";
export const inputs = ['calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber', 'weekRule'];
export const outputs = ['focus', 'blur', 'change', 'created', 'destroyed', 'navigated', 'renderDayCell', 'valueChange', 'valuesChange'];
export const twoWays = ['value', 'values'];
/**
 * Represents the Essential JS 2 Angular Calendar Component.
 * ```html
 * <ejs-calendar [value]='date'></ejs-calendar>
 * ```
 */
let CalendarComponent = CalendarComponent_1 = class CalendarComponent extends Calendar {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('CalendarsIslamic');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.formContext = new FormBase();
        this.formCompContext = new ComponentBase();
    }
    registerOnChange(registerFunction) {
    }
    registerOnTouched(registerFunction) {
    }
    writeValue(value) {
    }
    setDisabledState(disabled) {
    }
    ngOnInit() {
        this.formCompContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.formContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.formCompContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.formCompContext.ngAfterContentChecked(this);
    }
};
CalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
CalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CalendarComponent, selector: "ejs-calendar", inputs: { calendarMode: "calendarMode", cssClass: "cssClass", dayHeaderFormat: "dayHeaderFormat", depth: "depth", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", firstDayOfWeek: "firstDayOfWeek", isMultiSelection: "isMultiSelection", keyConfigs: "keyConfigs", locale: "locale", max: "max", min: "min", serverTimezoneOffset: "serverTimezoneOffset", showTodayButton: "showTodayButton", start: "start", value: "value", values: "values", weekNumber: "weekNumber", weekRule: "weekRule" }, outputs: { focus: "focus", blur: "blur", change: "change", created: "created", destroyed: "destroyed", navigated: "navigated", renderDayCell: "renderDayCell", valueChange: "valueChange", valuesChange: "valuesChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CalendarComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
CalendarComponent = CalendarComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], CalendarComponent);
export { CalendarComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-calendar',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CalendarComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2SixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBSXJELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLHNCQUFzQixFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsQ0FBQztBQUNoUyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVJLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVyRDs7Ozs7R0FLRztJQW1CVSxpQkFBaUIsK0JBQWpCLGlCQUFrQixTQUFRLFFBQVE7SUFnQjNDLFlBQW9CLEtBQWlCLEVBQVUsU0FBb0Is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IFZpZXdDb250YWluZXJSZWYsIFZhbHVlUHJvdmlkZXIsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgQ29tcG9uZW50TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBGb3JtQmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IENhbGVuZGFyIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNhbGVuZGFycyc7XG5cblxuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnY2FsZW5kYXJNb2RlJywnY3NzQ2xhc3MnLCdkYXlIZWFkZXJGb3JtYXQnLCdkZXB0aCcsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnZW5hYmxlZCcsJ2ZpcnN0RGF5T2ZXZWVrJywnaXNNdWx0aVNlbGVjdGlvbicsJ2tleUNvbmZpZ3MnLCdsb2NhbGUnLCdtYXgnLCdtaW4nLCdzZXJ2ZXJUaW1lem9uZU9mZnNldCcsJ3Nob3dUb2RheUJ1dHRvbicsJ3N0YXJ0JywndmFsdWUnLCd2YWx1ZXMnLCd3ZWVrTnVtYmVyJywnd2Vla1J1bGUnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCdjcmVhdGVkJywnZGVzdHJveWVkJywnbmF2aWdhdGVkJywncmVuZGVyRGF5Q2VsbCcsJ3ZhbHVlQ2hhbmdlJywndmFsdWVzQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ3ZhbHVlJywgJ3ZhbHVlcyddO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIEVzc2VudGlhbCBKUyAyIEFuZ3VsYXIgQ2FsZW5kYXIgQ29tcG9uZW50LlxuICogYGBgaHRtbFxuICogPGVqcy1jYWxlbmRhciBbdmFsdWVdPSdkYXRlJz48L2Vqcy1jYWxlbmRhcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1jYWxlbmRhcicsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2FsZW5kYXJDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2UsIEZvcm1CYXNlXSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBleHRlbmRzIENhbGVuZGFyIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBmb3JtQ29tcENvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIGZvcm1Db250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGNoYW5nZTogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRlc3Ryb3llZDogYW55O1xuXHRuYXZpZ2F0ZWQ6IGFueTtcblx0cmVuZGVyRGF5Q2VsbDogYW55O1xuXHR2YWx1ZUNoYW5nZTogYW55O1xuXHRwdWJsaWMgdmFsdWVzQ2hhbmdlOiBhbnk7XG5cblxuXG4gICAgcHVibGljIGZvY3VzOiBhbnk7XG4gICAgcHVibGljIGJsdXI6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnQ2FsZW5kYXJzSXNsYW1pYycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmZvcm1Db250ZXh0ICA9IG5ldyBGb3JtQmFzZSgpO1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dCAgPSBuZXcgQ29tcG9uZW50QmFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKHJlZ2lzdGVyRnVuY3Rpb246IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQocmVnaXN0ZXJGdW5jdGlvbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nT25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdPbkRlc3Ryb3kodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==