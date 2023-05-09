var ComboBoxComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { ComboBox } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select', 'valueChange'];
export const twoWays = ['value'];
/**
*The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
*```html
*<ejs-combobox></ejs-combobox>
*```
*/
let ComboBoxComponent = ComboBoxComponent_1 = class ComboBoxComponent extends ComboBox {
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
ComboBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ComboBoxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ComboBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ComboBoxComponent, selector: "ejs-combobox", inputs: { actionFailureTemplate: "actionFailureTemplate", allowCustom: "allowCustom", allowFiltering: "allowFiltering", autofill: "autofill", cssClass: "cssClass", dataSource: "dataSource", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", fields: "fields", filterBarPlaceholder: "filterBarPlaceholder", filterType: "filterType", floatLabelType: "floatLabelType", footerTemplate: "footerTemplate", groupTemplate: "groupTemplate", headerTemplate: "headerTemplate", htmlAttributes: "htmlAttributes", ignoreAccent: "ignoreAccent", ignoreCase: "ignoreCase", index: "index", itemTemplate: "itemTemplate", locale: "locale", noRecordsTemplate: "noRecordsTemplate", placeholder: "placeholder", popupHeight: "popupHeight", popupWidth: "popupWidth", query: "query", readonly: "readonly", showClearButton: "showClearButton", sortOrder: "sortOrder", text: "text", value: "value", valueTemplate: "valueTemplate", width: "width", zIndex: "zIndex" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforeOpen: "beforeOpen", blur: "blur", change: "change", close: "close", created: "created", customValueSpecifier: "customValueSpecifier", dataBound: "dataBound", destroyed: "destroyed", filtering: "filtering", focus: "focus", open: "open", select: "select", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ComboBoxComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "groupTemplate", first: true, predicate: ["groupTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "noRecordsTemplate", first: true, predicate: ["noRecordsTemplate"], descendants: true }, { propertyName: "actionFailureTemplate", first: true, predicate: ["actionFailureTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ComboBoxComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], ComboBoxComponent.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], ComboBoxComponent.prototype, "groupTemplate", void 0);
__decorate([
    Template()
], ComboBoxComponent.prototype, "itemTemplate", void 0);
__decorate([
    Template('No records found')
], ComboBoxComponent.prototype, "noRecordsTemplate", void 0);
__decorate([
    Template('Request failed')
], ComboBoxComponent.prototype, "actionFailureTemplate", void 0);
ComboBoxComponent = ComboBoxComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], ComboBoxComponent);
export { ComboBoxComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ComboBoxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-combobox',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ComboBoxComponent),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbWJvLWJveC9jb21ib2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9KLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQStCLGVBQWUsRUFBMEIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLHVCQUF1QixFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxzQkFBc0IsRUFBQyxZQUFZLEVBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pnQixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsZUFB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RSxPQUFPO29CQUNoQixRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDZDtxQkFDSjtvQkFDRCxPQUFPLEVBQUUsRUFFUjtpQkFDSjsrS0FnQ1UsY0FBYztzQkFGcEIsWUFBWTt1QkFBQyxnQkFBZ0I7Z0JBV3ZCLGNBQWM7c0JBRnBCLFlBQVk7dUJBQUMsZ0JBQWdCO2dCQVV2QixhQUFhO3NCQUZuQixZQUFZO3VCQUFDLGVBQWU7Z0JBZXRCLFlBQVk7c0JBRmxCLFlBQVk7dUJBQUMsY0FBYztnQkFLckIsaUJBQWlCO3NCQUZ2QixZQUFZO3VCQUFDLG1CQUFtQjtnQkFLMUIscUJBQXFCO3NCQUYzQixZQUFZO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVmFsdWVQcm92aWRlciwgUmVuZGVyZXIyLCBJbmplY3RvciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgRm9ybUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBDb21ib0JveCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1kcm9wZG93bnMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uRmFpbHVyZVRlbXBsYXRlJywnYWxsb3dDdXN0b20nLCdhbGxvd0ZpbHRlcmluZycsJ2F1dG9maWxsJywnY3NzQ2xhc3MnLCdkYXRhU291cmNlJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdlbmFibGVkJywnZmllbGRzJywnZmlsdGVyQmFyUGxhY2Vob2xkZXInLCdmaWx0ZXJUeXBlJywnZmxvYXRMYWJlbFR5cGUnLCdmb290ZXJUZW1wbGF0ZScsJ2dyb3VwVGVtcGxhdGUnLCdoZWFkZXJUZW1wbGF0ZScsJ2h0bWxBdHRyaWJ1dGVzJywnaWdub3JlQWNjZW50JywnaWdub3JlQ2FzZScsJ2luZGV4JywnaXRlbVRlbXBsYXRlJywnbG9jYWxlJywnbm9SZWNvcmRzVGVtcGxhdGUnLCdwbGFjZWhvbGRlcicsJ3BvcHVwSGVpZ2h0JywncG9wdXBXaWR0aCcsJ3F1ZXJ5JywncmVhZG9ubHknLCdzaG93Q2xlYXJCdXR0b24nLCdzb3J0T3JkZXInLCd0ZXh0JywndmFsdWUnLCd2YWx1ZVRlbXBsYXRlJywnd2lkdGgnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uQmVnaW4nLCdhY3Rpb25Db21wbGV0ZScsJ2FjdGlvbkZhaWx1cmUnLCdiZWZvcmVPcGVuJywnYmx1cicsJ2NoYW5nZScsJ2Nsb3NlJywnY3JlYXRlZCcsJ2N1c3RvbVZhbHVlU3BlY2lmaWVyJywnZGF0YUJvdW5kJywnZGVzdHJveWVkJywnZmlsdGVyaW5nJywnZm9jdXMnLCdvcGVuJywnc2VsZWN0JywndmFsdWVDaGFuZ2UnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFsndmFsdWUnXTtcblxuLyoqXG4qVGhlIENvbWJvQm94IGNvbXBvbmVudCBhbGxvd3MgdGhlIHVzZXIgdG8gdHlwZSBhIHZhbHVlIG9yIGNob29zZSBhbiBvcHRpb24gZnJvbSB0aGUgbGlzdCBvZiBwcmVkZWZpbmVkIG9wdGlvbnMuXG4qYGBgaHRtbFxuKjxlanMtY29tYm9ib3g+PC9lanMtY29tYm9ib3g+XG4qYGBgXG4qL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtY29tYm9ib3gnLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbWJvQm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlLCBGb3JtQmFzZV0pXG5leHBvcnQgY2xhc3MgQ29tYm9Cb3hDb21wb25lbnQgZXh0ZW5kcyBDb21ib0JveCBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgZm9ybUNvbXBDb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyBmb3JtQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRhY3Rpb25CZWdpbjogYW55O1xuXHRhY3Rpb25Db21wbGV0ZTogYW55O1xuXHRhY3Rpb25GYWlsdXJlOiBhbnk7XG5cdGJlZm9yZU9wZW46IGFueTtcblx0Ymx1cjogYW55O1xuXHRjaGFuZ2U6IGFueTtcblx0Y2xvc2U6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRjdXN0b21WYWx1ZVNwZWNpZmllcjogYW55O1xuXHRkYXRhQm91bmQ6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdGZpbHRlcmluZzogYW55O1xuXHRmb2N1czogYW55O1xuXHRvcGVuOiBhbnk7XG5cdHNlbGVjdDogYW55O1xuXHRwdWJsaWMgdmFsdWVDaGFuZ2U6IGFueTtcblxuXG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgdGhlIHRlbXBsYXRlIGRlc2lnbiBhbmQgYXNzaWducyBpdCB0byB0aGUgZm9vdGVyIGNvbnRhaW5lciBvZiB0aGUgcG9wdXAgbGlzdC4gXG4gICAgICogPiBGb3IgbW9yZSBkZXRhaWxzIGFib3V0IHRoZSBhdmFpbGFibGUgdGVtcGxhdGUgb3B0aW9ucyByZWZlciB0byBbYFRlbXBsYXRlYF0oLi4vLi4vZHJvcC1kb3duLWxpc3QvdGVtcGxhdGVzKSBkb2N1bWVudGF0aW9uLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAZGVwcmVjYXRlZCBcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdmb290ZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZm9vdGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZGVzaWduIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBoZWFkZXIgY29udGFpbmVyIG9mIHRoZSBwb3B1cCBsaXN0LiBcbiAgICAgKiA+IEZvciBtb3JlIGRldGFpbHMgYWJvdXQgdGhlIGF2YWlsYWJsZSB0ZW1wbGF0ZSBvcHRpb25zIHJlZmVyIHRvIFtgVGVtcGxhdGVgXSguLi8uLi9kcm9wLWRvd24tbGlzdC90ZW1wbGF0ZXMpIGRvY3VtZW50YXRpb24uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBkZXByZWNhdGVkIFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2hlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBoZWFkZXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBBY2NlcHRzIHRoZSB0ZW1wbGF0ZSBkZXNpZ24gYW5kIGFzc2lnbnMgaXQgdG8gdGhlIGdyb3VwIGhlYWRlcnMgcHJlc2VudCBpbiB0aGUgcG9wdXAgbGlzdC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGRlcHJlY2F0ZWQgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZ3JvdXBUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZ3JvdXBUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBBY2NlcHRzIHRoZSB0ZW1wbGF0ZSBkZXNpZ24gYW5kIGFzc2lnbnMgaXQgdG8gZWFjaCBsaXN0IGl0ZW0gcHJlc2VudCBpbiB0aGUgcG9wdXAuIFxuICAgICAqIFdlIGhhdmUgYnVpbHQtaW4gYHRlbXBsYXRlIGVuZ2luZWBcbiAgICAgKiBcbiAgICAgKiB3aGljaCBwcm92aWRlcyBvcHRpb25zIHRvIGNvbXBpbGUgdGVtcGxhdGUgc3RyaW5nIGludG8gYSBleGVjdXRhYmxlIGZ1bmN0aW9uLlxuICAgICAqRm9yIEVYOiBXZSBoYXZlIGV4cHJlc3Npb24gZXZvbHV0aW9uIGFzIGxpa2UgRVM2IGV4cHJlc3Npb24gc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGRlcHJlY2F0ZWQgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaXRlbVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBpdGVtVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdub1JlY29yZHNUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKCdObyByZWNvcmRzIGZvdW5kJylcbiAgICBwdWJsaWMgbm9SZWNvcmRzVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdhY3Rpb25GYWlsdXJlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgnUmVxdWVzdCBmYWlsZWQnKVxuICAgIHB1YmxpYyBhY3Rpb25GYWlsdXJlVGVtcGxhdGU6IGFueTtcblxuICAgIHByaXZhdGUgc2tpcEZyb21FdmVudDpib29sZWFuID0gdHJ1ZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmZvcm1Db250ZXh0ICA9IG5ldyBGb3JtQmFzZSgpO1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dCAgPSBuZXcgQ29tcG9uZW50QmFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKHJlZ2lzdGVyRnVuY3Rpb246IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQocmVnaXN0ZXJGdW5jdGlvbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nT25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdPbkRlc3Ryb3kodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==