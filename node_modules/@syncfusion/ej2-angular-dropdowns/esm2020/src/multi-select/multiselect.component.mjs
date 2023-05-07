var MultiSelectComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['actionFailureTemplate', 'addTagOnBlur', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'beforeSelectAll', 'blur', 'change', 'chipSelection', 'close', 'created', 'customValueSelection', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'removed', 'removing', 'select', 'selectedAll', 'tagging', 'valueChange'];
export const twoWays = ['value'];
/**
* The MultiSelect allows the user to pick a values from the predefined list of values.
*```html
*<ejs-multiselect></ejs-multiselect>
*```
*/
let MultiSelectComponent = MultiSelectComponent_1 = class MultiSelectComponent extends MultiSelect {
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
            let mod = this.injector.get('DropDownsCheckBoxSelection');
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
MultiSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiSelectComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
MultiSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: MultiSelectComponent, selector: "ejs-multiselect", inputs: { actionFailureTemplate: "actionFailureTemplate", addTagOnBlur: "addTagOnBlur", allowCustomValue: "allowCustomValue", allowFiltering: "allowFiltering", changeOnBlur: "changeOnBlur", closePopupOnSelect: "closePopupOnSelect", cssClass: "cssClass", dataSource: "dataSource", delimiterChar: "delimiterChar", enableGroupCheckBox: "enableGroupCheckBox", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableSelectionOrder: "enableSelectionOrder", enabled: "enabled", fields: "fields", filterBarPlaceholder: "filterBarPlaceholder", filterType: "filterType", floatLabelType: "floatLabelType", footerTemplate: "footerTemplate", groupTemplate: "groupTemplate", headerTemplate: "headerTemplate", hideSelectedItem: "hideSelectedItem", htmlAttributes: "htmlAttributes", ignoreAccent: "ignoreAccent", ignoreCase: "ignoreCase", itemTemplate: "itemTemplate", locale: "locale", maximumSelectionLength: "maximumSelectionLength", mode: "mode", noRecordsTemplate: "noRecordsTemplate", openOnClick: "openOnClick", placeholder: "placeholder", popupHeight: "popupHeight", popupWidth: "popupWidth", query: "query", readonly: "readonly", selectAllText: "selectAllText", showClearButton: "showClearButton", showDropDownIcon: "showDropDownIcon", showSelectAll: "showSelectAll", sortOrder: "sortOrder", text: "text", unSelectAllText: "unSelectAllText", value: "value", valueTemplate: "valueTemplate", width: "width", zIndex: "zIndex" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforeOpen: "beforeOpen", beforeSelectAll: "beforeSelectAll", blur: "blur", change: "change", chipSelection: "chipSelection", close: "close", created: "created", customValueSelection: "customValueSelection", dataBound: "dataBound", destroyed: "destroyed", filtering: "filtering", focus: "focus", open: "open", removed: "removed", removing: "removing", select: "select", selectedAll: "selectedAll", tagging: "tagging", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiSelectComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "valueTemplate", first: true, predicate: ["valueTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "groupTemplate", first: true, predicate: ["groupTemplate"], descendants: true }, { propertyName: "noRecordsTemplate", first: true, predicate: ["noRecordsTemplate"], descendants: true }, { propertyName: "actionFailureTemplate", first: true, predicate: ["actionFailureTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], MultiSelectComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], MultiSelectComponent.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], MultiSelectComponent.prototype, "valueTemplate", void 0);
__decorate([
    Template()
], MultiSelectComponent.prototype, "itemTemplate", void 0);
__decorate([
    Template()
], MultiSelectComponent.prototype, "groupTemplate", void 0);
__decorate([
    Template('No records found')
], MultiSelectComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    Template('Request failed')
], MultiSelectComponent.prototype, "actionFailureTemplate", void 0);
MultiSelectComponent = MultiSelectComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], MultiSelectComponent);
export { MultiSelectComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiSelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-multiselect',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => MultiSelectComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }], valueTemplate: [{
                type: ContentChild,
                args: ['valueTemplate']
            }], itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }], groupTemplate: [{
                type: ContentChild,
                args: ['groupTemplate']
            }], noRecordsTemplate: [{
                type: ContentChild,
                args: ['noRecordsTemplate']
            }], actionFailureTemplate: [{
                type: ContentChild,
                args: ['actionFailureTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL211bHRpLXNlbGVjdC9tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9KLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQStCLGVBQWUsRUFBMEIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLHVCQUF1QixFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMscUJBQXFCLEVBQUMscUJBQXFCLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLHNCQUFzQixFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxFQUFDLG1CQUFtQixFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxrQkFB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QkFBQyxtQkFBbUI7Z0JBSzFCLHFCQUFxQjtzQkFGM0IsWUFBWTt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZhbHVlUHJvdmlkZXIsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIEZvcm1CYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgTXVsdGlTZWxlY3QgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FjdGlvbkZhaWx1cmVUZW1wbGF0ZScsJ2FkZFRhZ09uQmx1cicsJ2FsbG93Q3VzdG9tVmFsdWUnLCdhbGxvd0ZpbHRlcmluZycsJ2NoYW5nZU9uQmx1cicsJ2Nsb3NlUG9wdXBPblNlbGVjdCcsJ2Nzc0NsYXNzJywnZGF0YVNvdXJjZScsJ2RlbGltaXRlckNoYXInLCdlbmFibGVHcm91cENoZWNrQm94JywnZW5hYmxlSHRtbFNhbml0aXplcicsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnZW5hYmxlU2VsZWN0aW9uT3JkZXInLCdlbmFibGVkJywnZmllbGRzJywnZmlsdGVyQmFyUGxhY2Vob2xkZXInLCdmaWx0ZXJUeXBlJywnZmxvYXRMYWJlbFR5cGUnLCdmb290ZXJUZW1wbGF0ZScsJ2dyb3VwVGVtcGxhdGUnLCdoZWFkZXJUZW1wbGF0ZScsJ2hpZGVTZWxlY3RlZEl0ZW0nLCdodG1sQXR0cmlidXRlcycsJ2lnbm9yZUFjY2VudCcsJ2lnbm9yZUNhc2UnLCdpdGVtVGVtcGxhdGUnLCdsb2NhbGUnLCdtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJywnbW9kZScsJ25vUmVjb3Jkc1RlbXBsYXRlJywnb3Blbk9uQ2xpY2snLCdwbGFjZWhvbGRlcicsJ3BvcHVwSGVpZ2h0JywncG9wdXBXaWR0aCcsJ3F1ZXJ5JywncmVhZG9ubHknLCdzZWxlY3RBbGxUZXh0Jywnc2hvd0NsZWFyQnV0dG9uJywnc2hvd0Ryb3BEb3duSWNvbicsJ3Nob3dTZWxlY3RBbGwnLCdzb3J0T3JkZXInLCd0ZXh0JywndW5TZWxlY3RBbGxUZXh0JywndmFsdWUnLCd2YWx1ZVRlbXBsYXRlJywnd2lkdGgnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uQmVnaW4nLCdhY3Rpb25Db21wbGV0ZScsJ2FjdGlvbkZhaWx1cmUnLCdiZWZvcmVPcGVuJywnYmVmb3JlU2VsZWN0QWxsJywnYmx1cicsJ2NoYW5nZScsJ2NoaXBTZWxlY3Rpb24nLCdjbG9zZScsJ2NyZWF0ZWQnLCdjdXN0b21WYWx1ZVNlbGVjdGlvbicsJ2RhdGFCb3VuZCcsJ2Rlc3Ryb3llZCcsJ2ZpbHRlcmluZycsJ2ZvY3VzJywnb3BlbicsJ3JlbW92ZWQnLCdyZW1vdmluZycsJ3NlbGVjdCcsJ3NlbGVjdGVkQWxsJywndGFnZ2luZycsJ3ZhbHVlQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ3ZhbHVlJ107XG5cbi8qKlxuKiBUaGUgTXVsdGlTZWxlY3QgYWxsb3dzIHRoZSB1c2VyIHRvIHBpY2sgYSB2YWx1ZXMgZnJvbSB0aGUgcHJlZGVmaW5lZCBsaXN0IG9mIHZhbHVlcy5cbipgYGBodG1sXG4qPGVqcy1tdWx0aXNlbGVjdD48L2Vqcy1tdWx0aXNlbGVjdD5cbipgYGBcbiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1tdWx0aXNlbGVjdCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXVsdGlTZWxlY3RDb21wb25lbnQpLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfVxuICAgIF0sXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2UsIEZvcm1CYXNlXSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdENvbXBvbmVudCBleHRlbmRzIE11bHRpU2VsZWN0IGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBmb3JtQ29tcENvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIGZvcm1Db250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGFjdGlvbkJlZ2luOiBhbnk7XG5cdGFjdGlvbkNvbXBsZXRlOiBhbnk7XG5cdGFjdGlvbkZhaWx1cmU6IGFueTtcblx0YmVmb3JlT3BlbjogYW55O1xuXHRiZWZvcmVTZWxlY3RBbGw6IGFueTtcblx0Ymx1cjogYW55O1xuXHRjaGFuZ2U6IGFueTtcblx0Y2hpcFNlbGVjdGlvbjogYW55O1xuXHRjbG9zZTogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGN1c3RvbVZhbHVlU2VsZWN0aW9uOiBhbnk7XG5cdGRhdGFCb3VuZDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZmlsdGVyaW5nOiBhbnk7XG5cdGZvY3VzOiBhbnk7XG5cdG9wZW46IGFueTtcblx0cmVtb3ZlZDogYW55O1xuXHRyZW1vdmluZzogYW55O1xuXHRzZWxlY3Q6IGFueTtcblx0c2VsZWN0ZWRBbGw6IGFueTtcblx0dGFnZ2luZzogYW55O1xuXHRwdWJsaWMgdmFsdWVDaGFuZ2U6IGFueTtcblxuXG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGRlc2lnbiBhbmQgYXNzaWducyBpdCB0byB0aGUgZm9vdGVyIGNvbnRhaW5lciBvZiB0aGUgcG9wdXAgbGlzdC4gXG4gICAgICogPiBGb3IgbW9yZSBkZXRhaWxzIGFib3V0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGUgb3B0aW9ucyByZWZlciB0byBbYFRlbXBsYXRlYF0oLi4vLi4vbXVsdGktc2VsZWN0L3RlbXBsYXRlcykgZG9jdW1lbnRhdGlvbi5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZm9vdGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGZvb3RlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGRlc2lnbiBhbmQgYXNzaWducyBpdCB0byB0aGUgaGVhZGVyIGNvbnRhaW5lciBvZiB0aGUgcG9wdXAgbGlzdC4gXG4gICAgICogPiBGb3IgbW9yZSBkZXRhaWxzIGFib3V0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGUgb3B0aW9ucyByZWZlciB0byBbYFRlbXBsYXRlYF0oLi4vLi4vbXVsdGktc2VsZWN0L3RlbXBsYXRlcykgZG9jdW1lbnRhdGlvbi5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGRlc2lnbiBhbmQgYXNzaWducyBpdCB0byB0aGUgc2VsZWN0ZWQgbGlzdCBpdGVtIGluIHRoZSBpbnB1dCBlbGVtZW50IG9mIHRoZSBjb21wb25lbnQuIFxuICAgICAqIEZvciBtb3JlIGRldGFpbHMgYWJvdXQgdGhlIGF2YWlsYWJsZSB0ZW1wbGF0ZSBvcHRpb25zIHJlZmVyIHRvIFxuICAgICAqIFtgVGVtcGxhdGVgXSguLi8uLi9tdWx0aS1zZWxlY3QvdGVtcGxhdGVzKSBkb2N1bWVudGF0aW9uLlxuICAgICAqIFxuICAgICAqIFdlIGhhdmUgYnVpbHQtaW4gYHRlbXBsYXRlIGVuZ2luZWBcbiAgICAgKndoaWNoIHByb3ZpZGVzIG9wdGlvbnMgdG8gY29tcGlsZSB0ZW1wbGF0ZSBzdHJpbmcgaW50byBhIGV4ZWN1dGFibGUgZnVuY3Rpb24uXG4gICAgICpGb3IgRVg6IFdlIGhhdmUgZXhwcmVzc2lvbiBldm9sdXRpb24gYXMgbGlrZSBFUzYgZXhwcmVzc2lvbiBzdHJpbmcgbGl0ZXJhbHMuXG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd2YWx1ZVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB2YWx1ZVRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGRlc2lnbiBhbmQgYXNzaWducyBpdCB0byBlYWNoIGxpc3QgaXRlbSBwcmVzZW50IGluIHRoZSBwb3B1cC4gXG4gICAgICogPiBGb3IgbW9yZSBkZXRhaWxzIGFib3V0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGUgb3B0aW9ucyByZWZlciB0byBbYFRlbXBsYXRlYF0oLi4vLi4vbXVsdGktc2VsZWN0L3RlbXBsYXRlcykgZG9jdW1lbnRhdGlvbi5cbiAgICAgKiBcbiAgICAgKiBXZSBoYXZlIGJ1aWx0LWluIGB0ZW1wbGF0ZSBlbmdpbmVgXG4gICAgICp3aGljaCBwcm92aWRlcyBvcHRpb25zIHRvIGNvbXBpbGUgdGVtcGxhdGUgc3RyaW5nIGludG8gYSBleGVjdXRhYmxlIGZ1bmN0aW9uLlxuICAgICAqRm9yIEVYOiBXZSBoYXZlIGV4cHJlc3Npb24gZXZvbHV0aW9uIGFzIGxpa2UgRVM2IGV4cHJlc3Npb24gc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaXRlbVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBpdGVtVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZGVzaWduIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBncm91cCBoZWFkZXJzIHByZXNlbnQgaW4gdGhlIE11bHRpU2VsZWN0IHBvcHVwIGxpc3QuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2dyb3VwVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGdyb3VwVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdub1JlY29yZHNUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKCdObyByZWNvcmRzIGZvdW5kJylcbiAgICBwdWJsaWMgbm9SZWNvcmRzVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdhY3Rpb25GYWlsdXJlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgnUmVxdWVzdCBmYWlsZWQnKVxuICAgIHB1YmxpYyBhY3Rpb25GYWlsdXJlVGVtcGxhdGU6IGFueTtcblxuICAgIHByaXZhdGUgc2tpcEZyb21FdmVudDpib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnRHJvcERvd25zQ2hlY2tCb3hTZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dCAgPSBuZXcgRm9ybUJhc2UoKTtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShyZWdpc3RlckZ1bmN0aW9uOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKHJlZ2lzdGVyRnVuY3Rpb246ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=