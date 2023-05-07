var DatePickerComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DatePicker } from '@syncfusion/ej2-calendars';
import * as i0 from "@angular/core";
export const inputs = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enableMask', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'maskPlaceholder', 'max', 'min', 'openOnFocus', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'weekRule', 'width', 'zIndex'];
export const outputs = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
export const twoWays = ['value'];
/**
 * Represents the Essential JS 2 Angular DatePicker Component.
 * ```html
 * <ejs-datepicker [value]='date'></ejs-datepicker>
 * ```
 */
let DatePickerComponent = DatePickerComponent_1 = class DatePickerComponent extends DatePicker {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('CalendarsIslamic');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('CalendarsMaskedDateTime');
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
DatePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DatePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DatePickerComponent, selector: "ejs-datepicker", inputs: { allowEdit: "allowEdit", calendarMode: "calendarMode", cssClass: "cssClass", dayHeaderFormat: "dayHeaderFormat", depth: "depth", enableMask: "enableMask", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", firstDayOfWeek: "firstDayOfWeek", floatLabelType: "floatLabelType", format: "format", htmlAttributes: "htmlAttributes", isMultiSelection: "isMultiSelection", keyConfigs: "keyConfigs", locale: "locale", maskPlaceholder: "maskPlaceholder", max: "max", min: "min", openOnFocus: "openOnFocus", placeholder: "placeholder", readonly: "readonly", serverTimezoneOffset: "serverTimezoneOffset", showClearButton: "showClearButton", showTodayButton: "showTodayButton", start: "start", strictMode: "strictMode", value: "value", values: "values", weekNumber: "weekNumber", weekRule: "weekRule", width: "width", zIndex: "zIndex" }, outputs: { blur: "blur", change: "change", cleared: "cleared", close: "close", created: "created", destroyed: "destroyed", focus: "focus", navigated: "navigated", open: "open", renderDayCell: "renderDayCell", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePickerComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DatePickerComponent = DatePickerComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], DatePickerComponent);
export { DatePickerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-datepicker',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatePickerComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2SixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBSXZELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHNCQUFzQixFQUFDLGlCQUFpQixFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQztBQUM3YyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxlQUFl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LFFBQVEsQ0FBQyxDQUFDO0dBQzlCLG1CQUFtQixDQTJFL0I7U0EzRVksbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBbEIvQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDOzRCQUNsRCxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSjtvQkFDRCxPQUFPLEVBQUUsRUFFUjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmFsdWVQcm92aWRlciwgUmVuZGVyZXIyLCBJbmplY3RvciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIEZvcm1CYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1jYWxlbmRhcnMnO1xuXG5cblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FsbG93RWRpdCcsJ2NhbGVuZGFyTW9kZScsJ2Nzc0NsYXNzJywnZGF5SGVhZGVyRm9ybWF0JywnZGVwdGgnLCdlbmFibGVNYXNrJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdlbmFibGVkJywnZmlyc3REYXlPZldlZWsnLCdmbG9hdExhYmVsVHlwZScsJ2Zvcm1hdCcsJ2h0bWxBdHRyaWJ1dGVzJywnaXNNdWx0aVNlbGVjdGlvbicsJ2tleUNvbmZpZ3MnLCdsb2NhbGUnLCdtYXNrUGxhY2Vob2xkZXInLCdtYXgnLCdtaW4nLCdvcGVuT25Gb2N1cycsJ3BsYWNlaG9sZGVyJywncmVhZG9ubHknLCdzZXJ2ZXJUaW1lem9uZU9mZnNldCcsJ3Nob3dDbGVhckJ1dHRvbicsJ3Nob3dUb2RheUJ1dHRvbicsJ3N0YXJ0Jywnc3RyaWN0TW9kZScsJ3ZhbHVlJywndmFsdWVzJywnd2Vla051bWJlcicsJ3dlZWtSdWxlJywnd2lkdGgnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYmx1cicsJ2NoYW5nZScsJ2NsZWFyZWQnLCdjbG9zZScsJ2NyZWF0ZWQnLCdkZXN0cm95ZWQnLCdmb2N1cycsJ25hdmlnYXRlZCcsJ29wZW4nLCdyZW5kZXJEYXlDZWxsJywndmFsdWVDaGFuZ2UnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFsndmFsdWUnXTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBFc3NlbnRpYWwgSlMgMiBBbmd1bGFyIERhdGVQaWNrZXIgQ29tcG9uZW50LlxuICogYGBgaHRtbFxuICogPGVqcy1kYXRlcGlja2VyIFt2YWx1ZV09J2RhdGUnPjwvZWpzLWRhdGVwaWNrZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtZGF0ZXBpY2tlcicsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9XG4gICAgXSxcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZSwgRm9ybUJhc2VdKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEYXRlUGlja2VyIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBmb3JtQ29tcENvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIGZvcm1Db250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGJsdXI6IGFueTtcblx0Y2hhbmdlOiBhbnk7XG5cdGNsZWFyZWQ6IGFueTtcblx0Y2xvc2U6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0Zm9jdXM6IGFueTtcblx0bmF2aWdhdGVkOiBhbnk7XG5cdG9wZW46IGFueTtcblx0cmVuZGVyRGF5Q2VsbDogYW55O1xuXHRwdWJsaWMgdmFsdWVDaGFuZ2U6IGFueTtcblxuXG5cbiAgICBwcml2YXRlIHNraXBGcm9tRXZlbnQ6Ym9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0NhbGVuZGFyc0lzbGFtaWMnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0NhbGVuZGFyc01hc2tlZERhdGVUaW1lJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQgID0gbmV3IEZvcm1CYXNlKCk7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UocmVnaXN0ZXJGdW5jdGlvbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChyZWdpc3RlckZ1bmN0aW9uOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19