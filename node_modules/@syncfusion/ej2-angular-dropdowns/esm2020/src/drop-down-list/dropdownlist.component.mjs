var DropDownListComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
export const twoWays = ['value'];
/**
*The DropDownList component contains a list of predefined values, from which the user can choose a single value.
*```html
*<ejs-dropdownlist></ejs-dropdownlist>
*```
*/
let DropDownListComponent = DropDownListComponent_1 = class DropDownListComponent extends DropDownList {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
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
        this.formCompContext.ngAfterContentChecked(this);
    }
};
DropDownListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownListComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DropDownListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DropDownListComponent, selector: "ejs-dropdownlist", inputs: { actionFailureTemplate: "actionFailureTemplate", allowFiltering: "allowFiltering", cssClass: "cssClass", dataSource: "dataSource", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", fields: "fields", filterBarPlaceholder: "filterBarPlaceholder", filterType: "filterType", floatLabelType: "floatLabelType", footerTemplate: "footerTemplate", groupTemplate: "groupTemplate", headerTemplate: "headerTemplate", htmlAttributes: "htmlAttributes", ignoreAccent: "ignoreAccent", ignoreCase: "ignoreCase", index: "index", itemTemplate: "itemTemplate", locale: "locale", noRecordsTemplate: "noRecordsTemplate", placeholder: "placeholder", popupHeight: "popupHeight", popupWidth: "popupWidth", query: "query", readonly: "readonly", showClearButton: "showClearButton", sortOrder: "sortOrder", text: "text", value: "value", valueTemplate: "valueTemplate", width: "width", zIndex: "zIndex" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforeOpen: "beforeOpen", blur: "blur", change: "change", close: "close", created: "created", dataBound: "dataBound", destroyed: "destroyed", filtering: "filtering", focus: "focus", open: "open", select: "select", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropDownListComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "valueTemplate", first: true, predicate: ["valueTemplate"], descendants: true }, { propertyName: "groupTemplate", first: true, predicate: ["groupTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "noRecordsTemplate", first: true, predicate: ["noRecordsTemplate"], descendants: true }, { propertyName: "actionFailureTemplate", first: true, predicate: ["actionFailureTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], DropDownListComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], DropDownListComponent.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], DropDownListComponent.prototype, "valueTemplate", void 0);
__decorate([
    Template()
], DropDownListComponent.prototype, "groupTemplate", void 0);
__decorate([
    Template()
], DropDownListComponent.prototype, "itemTemplate", void 0);
__decorate([
    Template('No records found')
], DropDownListComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    Template('Request failed')
], DropDownListComponent.prototype, "actionFailureTemplate", void 0);
DropDownListComponent = DropDownListComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], DropDownListComponent);
export { DropDownListComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DropDownListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-dropdownlist',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DropDownListComponent),
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
            }], groupTemplate: [{
                type: ContentChild,
                args: ['groupTemplate']
            }], itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }], noRecordsTemplate: [{
                type: ContentChild,
                args: ['noRecordsTemplate']
            }], actionFailureTemplate: [{
                type: ContentChild,
                args: ['actionFailureTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd25saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kcm9wLWRvd24tbGlzdC9kcm9wZG93bmxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0UsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2SixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUd4RCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyx1QkFBdUIsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLHNCQUFzQixFQUFDLFlBQVksRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLENBQUM7QUFDeGUsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsYUFBYSxFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxZ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ZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDUDs0QkFDSSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7cUJBQ0o7b0JBQ0QsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7K0tBOEJVLGNBQWM7c0JBRnBCLFlBQVk7dUJBQUMsZ0JBQWdCO2dCQVV2QixjQUFjO3NCQUZwQixZQUFZO3VCQUFDLGdCQUFnQjtnQkFnQnZCLGFBQWE7c0JBRm5CLFlBQVk7dUJBQUMsZUFBZTtnQkFVdEIsYUFBYTtzQkFGbkIsWUFBWTt1QkFBQyxlQUFlO2dCQWV0QixZQUFZO3NCQUZsQixZQUFZO3VCQUFDLGNBQWM7Z0JBS3JCLGlCQUFpQjtzQkFGdkIsWUFBWTt1QkFBQyxtQkFBbUI7Z0JBSzFCLHFCQUFxQjtzQkFGM0IsWUFBWTt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZhbHVlUHJvdmlkZXIsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIEZvcm1CYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgRHJvcERvd25MaXN0IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWRyb3Bkb3ducyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25GYWlsdXJlVGVtcGxhdGUnLCdhbGxvd0ZpbHRlcmluZycsJ2Nzc0NsYXNzJywnZGF0YVNvdXJjZScsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnZW5hYmxlZCcsJ2ZpZWxkcycsJ2ZpbHRlckJhclBsYWNlaG9sZGVyJywnZmlsdGVyVHlwZScsJ2Zsb2F0TGFiZWxUeXBlJywnZm9vdGVyVGVtcGxhdGUnLCdncm91cFRlbXBsYXRlJywnaGVhZGVyVGVtcGxhdGUnLCdodG1sQXR0cmlidXRlcycsJ2lnbm9yZUFjY2VudCcsJ2lnbm9yZUNhc2UnLCdpbmRleCcsJ2l0ZW1UZW1wbGF0ZScsJ2xvY2FsZScsJ25vUmVjb3Jkc1RlbXBsYXRlJywncGxhY2Vob2xkZXInLCdwb3B1cEhlaWdodCcsJ3BvcHVwV2lkdGgnLCdxdWVyeScsJ3JlYWRvbmx5Jywnc2hvd0NsZWFyQnV0dG9uJywnc29ydE9yZGVyJywndGV4dCcsJ3ZhbHVlJywndmFsdWVUZW1wbGF0ZScsJ3dpZHRoJywnekluZGV4J107XG5leHBvcnQgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbJ2FjdGlvbkJlZ2luJywnYWN0aW9uQ29tcGxldGUnLCdhY3Rpb25GYWlsdXJlJywnYmVmb3JlT3BlbicsJ2JsdXInLCdjaGFuZ2UnLCdjbG9zZScsJ2NyZWF0ZWQnLCdkYXRhQm91bmQnLCdkZXN0cm95ZWQnLCdmaWx0ZXJpbmcnLCdmb2N1cycsJ29wZW4nLCdzZWxlY3QnLCd2YWx1ZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWyd2YWx1ZSddO1xuXG4vKipcbipUaGUgRHJvcERvd25MaXN0IGNvbXBvbmVudCBjb250YWlucyBhIGxpc3Qgb2YgcHJlZGVmaW5lZCB2YWx1ZXMsIGZyb20gd2hpY2ggdGhlIHVzZXIgY2FuIGNob29zZSBhIHNpbmdsZSB2YWx1ZS5cbipgYGBodG1sXG4qPGVqcy1kcm9wZG93bmxpc3Q+PC9lanMtZHJvcGRvd25saXN0PlxuKmBgYFxuKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWRyb3Bkb3dubGlzdCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcERvd25MaXN0Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlLCBGb3JtQmFzZV0pXG5leHBvcnQgY2xhc3MgRHJvcERvd25MaXN0Q29tcG9uZW50IGV4dGVuZHMgRHJvcERvd25MaXN0IGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBmb3JtQ29tcENvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIGZvcm1Db250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGFjdGlvbkJlZ2luOiBhbnk7XG5cdGFjdGlvbkNvbXBsZXRlOiBhbnk7XG5cdGFjdGlvbkZhaWx1cmU6IGFueTtcblx0YmVmb3JlT3BlbjogYW55O1xuXHRibHVyOiBhbnk7XG5cdGNoYW5nZTogYW55O1xuXHRjbG9zZTogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRhdGFCb3VuZDogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZmlsdGVyaW5nOiBhbnk7XG5cdGZvY3VzOiBhbnk7XG5cdG9wZW46IGFueTtcblx0c2VsZWN0OiBhbnk7XG5cdHB1YmxpYyB2YWx1ZUNoYW5nZTogYW55O1xuXG5cbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZGVzaWduIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBmb290ZXIgY29udGFpbmVyIG9mIHRoZSBwb3B1cCBsaXN0LiBcbiAgICAgKiA+IEZvciBtb3JlIGRldGFpbHMgYWJvdXQgdGhlIGF2YWlsYWJsZSB0ZW1wbGF0ZSBvcHRpb25zIHJlZmVyIHRvIFtgVGVtcGxhdGVgXSguLi8uLi9kcm9wLWRvd24tbGlzdC90ZW1wbGF0ZXMpIGRvY3VtZW50YXRpb24uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2Zvb3RlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBmb290ZXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBBY2NlcHRzIHRoZSB0ZW1wbGF0ZSBkZXNpZ24gYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGhlYWRlciBjb250YWluZXIgb2YgdGhlIHBvcHVwIGxpc3QuIFxuICAgICAqID4gRm9yIG1vcmUgZGV0YWlscyBhYm91dCB0aGUgYXZhaWxhYmxlIHRlbXBsYXRlIG9wdGlvbnMgcmVmZXIgdG8gW2BUZW1wbGF0ZWBdKC4uLy4uL2Ryb3AtZG93bi1saXN0L3RlbXBsYXRlcykgZG9jdW1lbnRhdGlvbi5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGhlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGRlc2lnbiBhbmQgYXNzaWducyBpdCB0byB0aGUgc2VsZWN0ZWQgbGlzdCBpdGVtIGluIHRoZSBpbnB1dCBlbGVtZW50IG9mIHRoZSBjb21wb25lbnQuIFxuICAgICAqIEZvciBtb3JlIGRldGFpbHMgYWJvdXQgdGhlIGF2YWlsYWJsZSB0ZW1wbGF0ZSBvcHRpb25zIHJlZmVyIHRvIFxuICAgICAqIFtgVGVtcGxhdGVgXSguLi8uLi9kcm9wLWRvd24tbGlzdC90ZW1wbGF0ZXMpIGRvY3VtZW50YXRpb24uXG4gICAgICogXG4gICAgICogV2UgaGF2ZSBidWlsdC1pbiBgdGVtcGxhdGUgZW5naW5lYFxuICAgICAqd2hpY2ggcHJvdmlkZXMgb3B0aW9ucyB0byBjb21waWxlIHRlbXBsYXRlIHN0cmluZyBpbnRvIGEgZXhlY3V0YWJsZSBmdW5jdGlvbi5cbiAgICAgKkZvciBFWDogV2UgaGF2ZSBleHByZXNzaW9uIGV2b2x1dGlvbiBhcyBsaWtlIEVTNiBleHByZXNzaW9uIHN0cmluZyBsaXRlcmFscy5cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3ZhbHVlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHZhbHVlVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZGVzaWduIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBncm91cCBoZWFkZXJzIHByZXNlbnQgaW4gdGhlIHBvcHVwIGxpc3QuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBkZXByZWNhdGVkIFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2dyb3VwVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGdyb3VwVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZGVzaWduIGFuZCBhc3NpZ25zIGl0IHRvIGVhY2ggbGlzdCBpdGVtIHByZXNlbnQgaW4gdGhlIHBvcHVwLiBcbiAgICAgKiBXZSBoYXZlIGJ1aWx0LWluIGB0ZW1wbGF0ZSBlbmdpbmVgXG4gICAgICogXG4gICAgICogd2hpY2ggcHJvdmlkZXMgb3B0aW9ucyB0byBjb21waWxlIHRlbXBsYXRlIHN0cmluZyBpbnRvIGEgZXhlY3V0YWJsZSBmdW5jdGlvbi5cbiAgICAgKkZvciBFWDogV2UgaGF2ZSBleHByZXNzaW9uIGV2b2x1dGlvbiBhcyBsaWtlIEVTNiBleHByZXNzaW9uIHN0cmluZyBsaXRlcmFscy5cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBkZXByZWNhdGVkIFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2l0ZW1UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnbm9SZWNvcmRzVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgnTm8gcmVjb3JkcyBmb3VuZCcpXG4gICAgcHVibGljIG5vUmVjb3Jkc1RlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnYWN0aW9uRmFpbHVyZVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoJ1JlcXVlc3QgZmFpbGVkJylcbiAgICBwdWJsaWMgYWN0aW9uRmFpbHVyZVRlbXBsYXRlOiBhbnk7XG5cbiAgICBwcml2YXRlIHNraXBGcm9tRXZlbnQ6Ym9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dCAgPSBuZXcgRm9ybUJhc2UoKTtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShyZWdpc3RlckZ1bmN0aW9uOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKHJlZ2lzdGVyRnVuY3Rpb246ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=