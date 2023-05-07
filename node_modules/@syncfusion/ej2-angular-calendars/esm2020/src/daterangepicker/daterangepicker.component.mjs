var DateRangePickerComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DateRangePicker } from '@syncfusion/ej2-calendars';
import { Template } from '@syncfusion/ej2-angular-base';
import { PresetsDirective } from './presets.directive';
import * as i0 from "@angular/core";
export const inputs = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'openOnFocus', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'weekRule', 'width', 'zIndex'];
export const outputs = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select', 'startDateChange', 'endDateChange', 'valueChange'];
export const twoWays = ['startDate', 'endDate', 'value'];
/**
 * Represents the Essential JS 2 Angular DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker [startDate]='date' [endDate]='date'></ejs-daterangepicker>
 * ```
 */
let DateRangePickerComponent = DateRangePickerComponent_1 = class DateRangePickerComponent extends DateRangePicker {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['presets'];
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
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
        this.tagObjects[0].instance = this.childPresets;
        this.formCompContext.ngAfterContentChecked(this);
    }
};
DateRangePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DateRangePickerComponent, selector: "ejs-daterangepicker", inputs: { allowEdit: "allowEdit", calendarMode: "calendarMode", cssClass: "cssClass", dayHeaderFormat: "dayHeaderFormat", depth: "depth", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", endDate: "endDate", firstDayOfWeek: "firstDayOfWeek", floatLabelType: "floatLabelType", format: "format", htmlAttributes: "htmlAttributes", keyConfigs: "keyConfigs", locale: "locale", max: "max", maxDays: "maxDays", min: "min", minDays: "minDays", openOnFocus: "openOnFocus", placeholder: "placeholder", presets: "presets", readonly: "readonly", separator: "separator", serverTimezoneOffset: "serverTimezoneOffset", showClearButton: "showClearButton", start: "start", startDate: "startDate", strictMode: "strictMode", value: "value", weekNumber: "weekNumber", weekRule: "weekRule", width: "width", zIndex: "zIndex" }, outputs: { blur: "blur", change: "change", cleared: "cleared", close: "close", created: "created", destroyed: "destroyed", focus: "focus", navigated: "navigated", open: "open", renderDayCell: "renderDayCell", select: "select", startDateChange: "startDateChange", endDateChange: "endDateChange", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateRangePickerComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "start", first: true, predicate: ["start"], descendants: true }, { propertyName: "end", first: true, predicate: ["end"], descendants: true }, { propertyName: "childPresets", first: true, predicate: PresetsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], DateRangePickerComponent.prototype, "start", void 0);
__decorate([
    Template()
], DateRangePickerComponent.prototype, "end", void 0);
DateRangePickerComponent = DateRangePickerComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], DateRangePickerComponent);
export { DateRangePickerComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-daterangepicker',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DateRangePickerComponent),
                            multi: true
                        }
                    ],
                    queries: {
                        childPresets: new ContentChild(PresetsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { start: [{
                type: ContentChild,
                args: ['start']
            }], end: [{
                type: ContentChild,
                args: ['end']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9FLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0osT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBK0IsZUFBZSxFQUEwQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsV0FBVyxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLHNCQUFzQixFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQztBQUNoYyxNQUFNLENB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QkFDL0IsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUM7NEJBQ3ZELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZLEVBQUUsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7cUJBQ25EO2lCQUNKOytLQTZCVSxLQUFLO3NCQUZYLFlBQVk7dUJBQUMsT0FBTztnQkFLZCxHQUFHO3NCQUZULFlBQVk7dUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmFsdWVQcm92aWRlciwgUmVuZGVyZXIyLCBJbmplY3RvciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgRm9ybUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2FsZW5kYXJzJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBQcmVzZXRzRGlyZWN0aXZlIH0gZnJvbSAnLi9wcmVzZXRzLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhbGxvd0VkaXQnLCdjYWxlbmRhck1vZGUnLCdjc3NDbGFzcycsJ2RheUhlYWRlckZvcm1hdCcsJ2RlcHRoJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdlbmFibGVkJywnZW5kRGF0ZScsJ2ZpcnN0RGF5T2ZXZWVrJywnZmxvYXRMYWJlbFR5cGUnLCdmb3JtYXQnLCdodG1sQXR0cmlidXRlcycsJ2tleUNvbmZpZ3MnLCdsb2NhbGUnLCdtYXgnLCdtYXhEYXlzJywnbWluJywnbWluRGF5cycsJ29wZW5PbkZvY3VzJywncGxhY2Vob2xkZXInLCdwcmVzZXRzJywncmVhZG9ubHknLCdzZXBhcmF0b3InLCdzZXJ2ZXJUaW1lem9uZU9mZnNldCcsJ3Nob3dDbGVhckJ1dHRvbicsJ3N0YXJ0Jywnc3RhcnREYXRlJywnc3RyaWN0TW9kZScsJ3ZhbHVlJywnd2Vla051bWJlcicsJ3dlZWtSdWxlJywnd2lkdGgnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYmx1cicsJ2NoYW5nZScsJ2NsZWFyZWQnLCdjbG9zZScsJ2NyZWF0ZWQnLCdkZXN0cm95ZWQnLCdmb2N1cycsJ25hdmlnYXRlZCcsJ29wZW4nLCdyZW5kZXJEYXlDZWxsJywnc2VsZWN0Jywnc3RhcnREYXRlQ2hhbmdlJywnZW5kRGF0ZUNoYW5nZScsJ3ZhbHVlQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ3N0YXJ0RGF0ZScsICdlbmREYXRlJywgJ3ZhbHVlJ107XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgRXNzZW50aWFsIEpTIDIgQW5ndWxhciBEYXRlUmFuZ2VQaWNrZXIgQ29tcG9uZW50LlxuICogYGBgaHRtbFxuICogPGVqcy1kYXRlcmFuZ2VwaWNrZXIgW3N0YXJ0RGF0ZV09J2RhdGUnIFtlbmREYXRlXT0nZGF0ZSc+PC9lanMtZGF0ZXJhbmdlcGlja2VyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWRhdGVyYW5nZXBpY2tlcicsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRQcmVzZXRzOiBuZXcgQ29udGVudENoaWxkKFByZXNldHNEaXJlY3RpdmUpXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2UsIEZvcm1CYXNlXSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEYXRlUmFuZ2VQaWNrZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGZvcm1Db21wQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgZm9ybUNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0Ymx1cjogYW55O1xuXHRjaGFuZ2U6IGFueTtcblx0Y2xlYXJlZDogYW55O1xuXHRjbG9zZTogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRlc3Ryb3llZDogYW55O1xuXHRmb2N1czogYW55O1xuXHRuYXZpZ2F0ZWQ6IGFueTtcblx0b3BlbjogYW55O1xuXHRyZW5kZXJEYXlDZWxsOiBhbnk7XG5cdHNlbGVjdDogYW55O1xuXHRzdGFydERhdGVDaGFuZ2U6IGFueTtcblx0ZW5kRGF0ZUNoYW5nZTogYW55O1xuXHRwdWJsaWMgdmFsdWVDaGFuZ2U6IGFueTtcbiAgICBwdWJsaWMgY2hpbGRQcmVzZXRzOiBhbnk7XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydwcmVzZXRzJ107XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgaW5pdGlhbCB2aWV3IG9mIHRoZSBDYWxlbmRhciB3aGVuIGl0IGlzIG9wZW5lZC4gXG4gICAgICogV2l0aCB0aGUgaGVscCBvZiB0aGlzIHByb3BlcnR5LCBpbml0aWFsIHZpZXcgY2FuIGJlIGNoYW5nZWQgdG8geWVhciBvciBkZWNhZGUgdmlldy5cbiAgICAgKiBAZGVmYXVsdCBNb250aFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3N0YXJ0JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBzdGFydDogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2VuZCcpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZW5kOiBhbnk7XG5cbiAgICBwcml2YXRlIHNraXBGcm9tRXZlbnQ6Ym9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dCAgPSBuZXcgRm9ybUJhc2UoKTtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShyZWdpc3RlckZ1bmN0aW9uOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKHJlZ2lzdGVyRnVuY3Rpb246ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRQcmVzZXRzO1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=