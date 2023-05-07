import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, NgModule, Directive, ContentChildren, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { setValue, FormBase, ComponentBase, ComponentMixins, ComplexBase, ArrayBase, Template } from '@syncfusion/ej2-angular-base';
import { Calendar, Islamic, DatePicker, MaskedDateTime, TimePicker, DateRangePicker, DateTimePicker } from '@syncfusion/ej2-calendars';
export * from '@syncfusion/ej2-calendars';
import { CommonModule } from '@angular/common';

var CalendarComponent_1;
const inputs$4 = ['calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber', 'weekRule'];
const outputs$5 = ['focus', 'blur', 'change', 'created', 'destroyed', 'navigated', 'renderDayCell', 'valueChange', 'valuesChange'];
const twoWays$4 = ['value', 'values'];
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
        this.registerEvents(outputs$5);
        this.addTwoWay.call(this, twoWays$4);
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-calendar',
                    inputs: inputs$4,
                    outputs: outputs$5,
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

/**
 * NgModule definition for the Calendar component.
 */
class CalendarModule {
}
CalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarModule, declarations: [CalendarComponent], imports: [CommonModule], exports: [CalendarComponent] });
CalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        CalendarComponent
                    ],
                    exports: [
                        CalendarComponent
                    ]
                }]
        }] });

const IslamicService = { provide: 'CalendarsIslamic', useValue: Islamic };
/**
 * NgModule definition for the Calendar component with providers.
 */
class CalendarAllModule {
}
CalendarAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CalendarAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarAllModule, imports: [CommonModule, CalendarModule], exports: [CalendarModule] });
CalendarAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarAllModule, providers: [
        IslamicService
    ], imports: [[CommonModule, CalendarModule], CalendarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CalendarAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CalendarModule],
                    exports: [
                        CalendarModule
                    ],
                    providers: [
                        IslamicService
                    ]
                }]
        }] });

var DatePickerComponent_1;
const inputs$3 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enableMask', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'maskPlaceholder', 'max', 'min', 'openOnFocus', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'weekRule', 'width', 'zIndex'];
const outputs$4 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
const twoWays$3 = ['value'];
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
        this.registerEvents(outputs$4);
        this.addTwoWay.call(this, twoWays$3);
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-datepicker',
                    inputs: inputs$3,
                    outputs: outputs$4,
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

/**
 * NgModule definition for the DatePicker component.
 */
class DatePickerModule {
}
DatePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerModule, declarations: [DatePickerComponent], imports: [CommonModule], exports: [DatePickerComponent] });
DatePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DatePickerComponent
                    ],
                    exports: [
                        DatePickerComponent
                    ]
                }]
        }] });

const MaskedDateTimeService = { provide: 'CalendarsMaskedDateTime', useValue: MaskedDateTime };
/**
 * NgModule definition for the DatePicker component with providers.
 */
class DatePickerAllModule {
}
DatePickerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatePickerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerAllModule, imports: [CommonModule, DatePickerModule], exports: [DatePickerModule] });
DatePickerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerAllModule, providers: [
        MaskedDateTimeService
    ], imports: [[CommonModule, DatePickerModule], DatePickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DatePickerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DatePickerModule],
                    exports: [
                        DatePickerModule
                    ],
                    providers: [
                        MaskedDateTimeService
                    ]
                }]
        }] });

var TimePickerComponent_1;
const inputs$2 = ['allowEdit', 'cssClass', 'enableMask', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'maskPlaceholder', 'max', 'min', 'openOnFocus', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex'];
const outputs$3 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'itemRender', 'open', 'valueChange'];
const twoWays$2 = ['value'];
/**
 * Represents the Essential JS 2 Angular TimePicker Component.
 * ```html
 * <ejs-timepicker [value]='dateTime'></ejs-timepicker>
 * ```
 */
let TimePickerComponent = TimePickerComponent_1 = class TimePickerComponent extends TimePicker {
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
            let mod = this.injector.get('CalendarsMaskedDateTime');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$2);
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
TimePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TimePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TimePickerComponent, selector: "ejs-timepicker", inputs: { allowEdit: "allowEdit", cssClass: "cssClass", enableMask: "enableMask", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", floatLabelType: "floatLabelType", format: "format", htmlAttributes: "htmlAttributes", keyConfigs: "keyConfigs", locale: "locale", maskPlaceholder: "maskPlaceholder", max: "max", min: "min", openOnFocus: "openOnFocus", placeholder: "placeholder", readonly: "readonly", scrollTo: "scrollTo", showClearButton: "showClearButton", step: "step", strictMode: "strictMode", value: "value", width: "width", zIndex: "zIndex" }, outputs: { blur: "blur", change: "change", cleared: "cleared", close: "close", created: "created", destroyed: "destroyed", focus: "focus", itemRender: "itemRender", open: "open", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimePickerComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
TimePickerComponent = TimePickerComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], TimePickerComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-timepicker',
                    inputs: inputs$2,
                    outputs: outputs$3,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TimePickerComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the TimePicker component.
 */
class TimePickerModule {
}
TimePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TimePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerModule, declarations: [TimePickerComponent], imports: [CommonModule], exports: [TimePickerComponent] });
TimePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TimePickerComponent
                    ],
                    exports: [
                        TimePickerComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the TimePicker component with providers.
 */
class TimePickerAllModule {
}
TimePickerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TimePickerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerAllModule, imports: [CommonModule, TimePickerModule], exports: [TimePickerModule] });
TimePickerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerAllModule, providers: [], imports: [[CommonModule, TimePickerModule], TimePickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimePickerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TimePickerModule],
                    exports: [
                        TimePickerModule
                    ],
                    providers: []
                }]
        }] });

let input = ['end', 'label', 'start'];
let outputs$2 = [];
/**
 * 'e-presets' directive represent a presets of angular daterangepicker
 * It must be contained in a daterangepicker component(`ej-daterangepicker`).
 * ```html
 * <ejs-daterangepicker id='range'>
 *   <e-presets>
 *    <e-preset label='Last Week' [start]=new Date('06/07/2018') [end]= new Date('06/01/2018')></e-preset>
 *    <e-preset label='Last Month' [start]=new Date('06/07/2018') [end]= new Date('05/07/2018')></e-preset>
 *   </e-presets>
 * </ejs-daterangepicker>
 * ```
 */
class PresetDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input;
    }
}
PresetDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PresetDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PresetDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PresetDirective, selector: "e-presets>e-preset", inputs: { end: "end", label: "label", start: "start" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PresetDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-presets>e-preset',
                    inputs: input,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Preset Array Directive
 * @private
 */
class PresetsDirective extends ArrayBase {
    constructor() {
        super('presets');
    }
}
PresetsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PresetsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PresetsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PresetsDirective, selector: "ejs-daterangepicker>e-presets", queries: [{ propertyName: "children", predicate: PresetDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PresetsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-daterangepicker>e-presets',
                    queries: {
                        children: new ContentChildren(PresetDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

var DateRangePickerComponent_1;
const inputs$1 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'openOnFocus', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'weekRule', 'width', 'zIndex'];
const outputs$1 = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select', 'startDateChange', 'endDateChange', 'valueChange'];
const twoWays$1 = ['startDate', 'endDate', 'value'];
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
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-daterangepicker',
                    inputs: inputs$1,
                    outputs: outputs$1,
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

/**
 * NgModule definition for the DateRangePicker component.
 */
class DateRangePickerModule {
}
DateRangePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateRangePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerModule, declarations: [DateRangePickerComponent,
        PresetDirective,
        PresetsDirective], imports: [CommonModule], exports: [DateRangePickerComponent,
        PresetDirective,
        PresetsDirective] });
DateRangePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DateRangePickerComponent,
                        PresetDirective,
                        PresetsDirective
                    ],
                    exports: [
                        DateRangePickerComponent,
                        PresetDirective,
                        PresetsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the DateRangePicker component with providers.
 */
class DateRangePickerAllModule {
}
DateRangePickerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateRangePickerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerAllModule, imports: [CommonModule, DateRangePickerModule], exports: [DateRangePickerModule] });
DateRangePickerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerAllModule, providers: [], imports: [[CommonModule, DateRangePickerModule], DateRangePickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateRangePickerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DateRangePickerModule],
                    exports: [
                        DateRangePickerModule
                    ],
                    providers: []
                }]
        }] });

var DateTimePickerComponent_1;
const inputs = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enableMask', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'maskPlaceholder', 'max', 'min', 'openOnFocus', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'weekRule', 'width', 'zIndex'];
const outputs = ['blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'valueChange'];
const twoWays = ['value'];
/**
 * Represents the Essential JS 2 Angular DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker [value]='dateTime'></ejs-datetimepicker>
 * ```
 */
let DateTimePickerComponent = DateTimePickerComponent_1 = class DateTimePickerComponent extends DateTimePicker {
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
DateTimePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DateTimePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DateTimePickerComponent, selector: "ejs-datetimepicker", inputs: { allowEdit: "allowEdit", calendarMode: "calendarMode", cssClass: "cssClass", dayHeaderFormat: "dayHeaderFormat", depth: "depth", enableMask: "enableMask", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", firstDayOfWeek: "firstDayOfWeek", floatLabelType: "floatLabelType", format: "format", htmlAttributes: "htmlAttributes", isMultiSelection: "isMultiSelection", keyConfigs: "keyConfigs", locale: "locale", maskPlaceholder: "maskPlaceholder", max: "max", min: "min", openOnFocus: "openOnFocus", placeholder: "placeholder", readonly: "readonly", scrollTo: "scrollTo", serverTimezoneOffset: "serverTimezoneOffset", showClearButton: "showClearButton", showTodayButton: "showTodayButton", start: "start", step: "step", strictMode: "strictMode", timeFormat: "timeFormat", value: "value", values: "values", weekNumber: "weekNumber", weekRule: "weekRule", width: "width", zIndex: "zIndex" }, outputs: { blur: "blur", change: "change", cleared: "cleared", close: "close", created: "created", destroyed: "destroyed", focus: "focus", navigated: "navigated", open: "open", renderDayCell: "renderDayCell", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateTimePickerComponent_1),
            multi: true
        }
    ], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DateTimePickerComponent = DateTimePickerComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], DateTimePickerComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-datetimepicker',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DateTimePickerComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DateTimePicker component.
 */
class DateTimePickerModule {
}
DateTimePickerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateTimePickerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerModule, declarations: [DateTimePickerComponent], imports: [CommonModule], exports: [DateTimePickerComponent] });
DateTimePickerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DateTimePickerComponent
                    ],
                    exports: [
                        DateTimePickerComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the DateTimePicker component with providers.
 */
class DateTimePickerAllModule {
}
DateTimePickerAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateTimePickerAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerAllModule, imports: [CommonModule, DateTimePickerModule], exports: [DateTimePickerModule] });
DateTimePickerAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerAllModule, providers: [], imports: [[CommonModule, DateTimePickerModule], DateTimePickerModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DateTimePickerAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DateTimePickerModule],
                    exports: [
                        DateTimePickerModule
                    ],
                    providers: []
                }]
        }] });

// Mapping root file for package generation

/**
 * Generated bundle index. Do not edit.
 */

export { CalendarAllModule, CalendarComponent, CalendarModule, DatePickerAllModule, DatePickerComponent, DatePickerModule, DateRangePickerAllModule, DateRangePickerComponent, DateRangePickerModule, DateTimePickerAllModule, DateTimePickerComponent, DateTimePickerModule, IslamicService, MaskedDateTimeService, PresetDirective, PresetsDirective, TimePickerAllModule, TimePickerComponent, TimePickerModule };
//# sourceMappingURL=syncfusion-ej2-angular-calendars.mjs.map
