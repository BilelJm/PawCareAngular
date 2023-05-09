var ListBoxComponent_1;
import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, ComponentMixins, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { ListBox } from '@syncfusion/ej2-dropdowns';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex'];
export const outputs = ['focus', 'blur', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeDrop', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select', 'valueChange'];
export const twoWays = ['value'];
/**
* The ListBox allows the user to select values from the predefined list of values.
*```html
*<ejs-listbox [dataSource]='data'></ejs-listbox>
*```
*/
let ListBoxComponent = ListBoxComponent_1 = class ListBoxComponent extends ListBox {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
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
ListBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListBoxComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ListBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ListBoxComponent, selector: "ejs-listbox", inputs: { actionFailureTemplate: "actionFailureTemplate", allowDragAndDrop: "allowDragAndDrop", allowFiltering: "allowFiltering", cssClass: "cssClass", dataSource: "dataSource", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enabled: "enabled", fields: "fields", filterBarPlaceholder: "filterBarPlaceholder", filterType: "filterType", groupTemplate: "groupTemplate", height: "height", ignoreAccent: "ignoreAccent", ignoreCase: "ignoreCase", itemTemplate: "itemTemplate", locale: "locale", maximumSelectionLength: "maximumSelectionLength", noRecordsTemplate: "noRecordsTemplate", query: "query", scope: "scope", selectionSettings: "selectionSettings", sortOrder: "sortOrder", toolbarSettings: "toolbarSettings", value: "value", zIndex: "zIndex" }, outputs: { focus: "focus", blur: "blur", actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforeDrop: "beforeDrop", beforeItemRender: "beforeItemRender", change: "change", created: "created", dataBound: "dataBound", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", drop: "drop", filtering: "filtering", select: "select", valueChange: "valueChange" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListBoxComponent_1),
            multi: true
        }
    ], queries: [{ propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "noRecordsTemplate", first: true, predicate: ["noRecordsTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ListBoxComponent.prototype, "itemTemplate", void 0);
__decorate([
    Template('No records found')
], ListBoxComponent.prototype, "noRecordsTemplate", void 0);
ListBoxComponent = ListBoxComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase])
], ListBoxComponent);
export { ListBoxComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ListBoxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-listbox',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ListBoxComponent),
                            multi: true
                        }
                    ],
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }], noRecordsTemplate: [{
                type: ContentChild,
                args: ['noRecordsTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlzdC1ib3gvbGlzdGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9KLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQStCLGVBQWUsRUFBMEIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLHVCQUF1QixFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsc0JBQXNCLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsQ0FBQztBQUMxWixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGtCQUFrQixFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVB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Q2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO29CQUNELE9BQU8sRUFBRSxFQUVSO2lCQUNKOytLQW1DVSxZQUFZO3NCQUZsQixZQUFZO3VCQUFDLGNBQWM7Z0JBS3JCLGlCQUFpQjtzQkFGdkIsWUFBWTt1QkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFZhbHVlUHJvdmlkZXIsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIEZvcm1CYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgTGlzdEJveCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1kcm9wZG93bnMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uRmFpbHVyZVRlbXBsYXRlJywnYWxsb3dEcmFnQW5kRHJvcCcsJ2FsbG93RmlsdGVyaW5nJywnY3NzQ2xhc3MnLCdkYXRhU291cmNlJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdlbmFibGVkJywnZmllbGRzJywnZmlsdGVyQmFyUGxhY2Vob2xkZXInLCdmaWx0ZXJUeXBlJywnZ3JvdXBUZW1wbGF0ZScsJ2hlaWdodCcsJ2lnbm9yZUFjY2VudCcsJ2lnbm9yZUNhc2UnLCdpdGVtVGVtcGxhdGUnLCdsb2NhbGUnLCdtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJywnbm9SZWNvcmRzVGVtcGxhdGUnLCdxdWVyeScsJ3Njb3BlJywnc2VsZWN0aW9uU2V0dGluZ3MnLCdzb3J0T3JkZXInLCd0b29sYmFyU2V0dGluZ3MnLCd2YWx1ZScsJ3pJbmRleCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydmb2N1cycsICdibHVyJywgJ2FjdGlvbkJlZ2luJywnYWN0aW9uQ29tcGxldGUnLCdhY3Rpb25GYWlsdXJlJywnYmVmb3JlRHJvcCcsJ2JlZm9yZUl0ZW1SZW5kZXInLCdjaGFuZ2UnLCdjcmVhdGVkJywnZGF0YUJvdW5kJywnZGVzdHJveWVkJywnZHJhZycsJ2RyYWdTdGFydCcsJ2Ryb3AnLCdmaWx0ZXJpbmcnLCdzZWxlY3QnLCd2YWx1ZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWyd2YWx1ZSddO1xuXG4vKipcbiogVGhlIExpc3RCb3ggYWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCB2YWx1ZXMgZnJvbSB0aGUgcHJlZGVmaW5lZCBsaXN0IG9mIHZhbHVlcy5cbipgYGBodG1sXG4qPGVqcy1saXN0Ym94IFtkYXRhU291cmNlXT0nZGF0YSc+PC9lanMtbGlzdGJveD5cbipgYGBcbiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1saXN0Ym94JyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaXN0Qm94Q29tcG9uZW50KSxcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlLCBGb3JtQmFzZV0pXG5leHBvcnQgY2xhc3MgTGlzdEJveENvbXBvbmVudCBleHRlbmRzIExpc3RCb3ggaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGZvcm1Db21wQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgZm9ybUNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWN0aW9uQmVnaW46IGFueTtcblx0YWN0aW9uQ29tcGxldGU6IGFueTtcblx0YWN0aW9uRmFpbHVyZTogYW55O1xuXHRiZWZvcmVEcm9wOiBhbnk7XG5cdGJlZm9yZUl0ZW1SZW5kZXI6IGFueTtcblx0Y2hhbmdlOiBhbnk7XG5cdGNyZWF0ZWQ6IGFueTtcblx0ZGF0YUJvdW5kOiBhbnk7XG5cdGRlc3Ryb3llZDogYW55O1xuXHRkcmFnOiBhbnk7XG5cdGRyYWdTdGFydDogYW55O1xuXHRkcm9wOiBhbnk7XG5cdGZpbHRlcmluZzogYW55O1xuXHRzZWxlY3Q6IGFueTtcblx0cHVibGljIHZhbHVlQ2hhbmdlOiBhbnk7XG5cblxuICAgIC8qKiBcbiAgICAgKiBBY2NlcHRzIHRoZSB0ZW1wbGF0ZSBkZXNpZ24gYW5kIGFzc2lnbnMgaXQgdG8gZWFjaCBsaXN0IGl0ZW0gcHJlc2VudCBpbiB0aGUgcG9wdXAuIFxuICAgICAqIFdlIGhhdmUgYnVpbHQtaW4gYHRlbXBsYXRlIGVuZ2luZWBcbiAgICAgKiBcbiAgICAgKiB3aGljaCBwcm92aWRlcyBvcHRpb25zIHRvIGNvbXBpbGUgdGVtcGxhdGUgc3RyaW5nIGludG8gYSBleGVjdXRhYmxlIGZ1bmN0aW9uLlxuICAgICAqRm9yIEVYOiBXZSBoYXZlIGV4cHJlc3Npb24gZXZvbHV0aW9uIGFzIGxpa2UgRVM2IGV4cHJlc3Npb24gc3RyaW5nIGxpdGVyYWxzLlxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGRlcHJlY2F0ZWQgXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnaXRlbVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBpdGVtVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdub1JlY29yZHNUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKCdObyByZWNvcmRzIGZvdW5kJylcbiAgICBwdWJsaWMgbm9SZWNvcmRzVGVtcGxhdGU6IGFueTtcblxuICAgIHB1YmxpYyBmb2N1czogYW55O1xuICAgIHB1YmxpYyBibHVyOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0Ryb3BEb3duc0NoZWNrQm94U2VsZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRleHQgID0gbmV3IEZvcm1CYXNlKCk7XG4gICAgICAgIHRoaXMuZm9ybUNvbXBDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UocmVnaXN0ZXJGdW5jdGlvbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChyZWdpc3RlckZ1bmN0aW9uOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mb3JtQ29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZvcm1Db21wQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtQ29tcENvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19