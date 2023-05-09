import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { RecurrenceEditor } from '@syncfusion/ej2-schedule';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-recurrenceeditor` represents the Angular RecurrenceEditor Component.
 * ```html
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
export declare class RecurrenceEditorComponent extends RecurrenceEditor implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    change: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecurrenceEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecurrenceEditorComponent, "ejs-recurrenceeditor", never, { "calendarMode": "calendarMode"; "cssClass": "cssClass"; "dateFormat": "dateFormat"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "firstDayOfWeek": "firstDayOfWeek"; "frequencies": "frequencies"; "locale": "locale"; "maxDate": "maxDate"; "minDate": "minDate"; "selectedType": "selectedType"; "startDate": "startDate"; "value": "value"; }, { "change": "change"; }, never, never>;
}
