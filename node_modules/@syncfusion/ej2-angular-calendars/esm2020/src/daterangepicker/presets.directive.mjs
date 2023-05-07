import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['end', 'label', 'start'];
let outputs = [];
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
export class PresetDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
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
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Preset Array Directive
 * @private
 */
export class PresetsDirective extends ArrayBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXJhbmdlcGlja2VyL3ByZXNldHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7Ozs7Ozs7R0FXRztBQVNILE1BQU0sT0FBTyxlQUFnQixTQUFRLFdBQTRCO0lBa0I3RCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzRHQXZCUSxlQUFlO2dHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFSM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBMkJEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUEyQjtJQUM3RDtRQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQixDQUFDOzs2R0FIUSxnQkFBZ0I7aUdBQWhCLGdCQUFnQiw4RkFIUyxlQUFlOzJGQUd4QyxnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxlQUFlLENBQUM7cUJBQ2pEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydlbmQnLCAnbGFiZWwnLCAnc3RhcnQnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiAnZS1wcmVzZXRzJyBkaXJlY3RpdmUgcmVwcmVzZW50IGEgcHJlc2V0cyBvZiBhbmd1bGFyIGRhdGVyYW5nZXBpY2tlciBcbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgZGF0ZXJhbmdlcGlja2VyIGNvbXBvbmVudChgZWotZGF0ZXJhbmdlcGlja2VyYCkuIFxuICogYGBgaHRtbFxuICogPGVqcy1kYXRlcmFuZ2VwaWNrZXIgaWQ9J3JhbmdlJz4gXG4gKiAgIDxlLXByZXNldHM+XG4gKiAgICA8ZS1wcmVzZXQgbGFiZWw9J0xhc3QgV2VlaycgW3N0YXJ0XT1uZXcgRGF0ZSgnMDYvMDcvMjAxOCcpIFtlbmRdPSBuZXcgRGF0ZSgnMDYvMDEvMjAxOCcpPjwvZS1wcmVzZXQ+XG4gKiAgICA8ZS1wcmVzZXQgbGFiZWw9J0xhc3QgTW9udGgnIFtzdGFydF09bmV3IERhdGUoJzA2LzA3LzIwMTgnKSBbZW5kXT0gbmV3IERhdGUoJzA1LzA3LzIwMTgnKT48L2UtcHJlc2V0PlxuICogICA8L2UtcHJlc2V0cz5cbiAqIDwvZWpzLWRhdGVyYW5nZXBpY2tlcj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtcHJlc2V0cz5lLXByZXNldCcsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFByZXNldERpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFByZXNldERpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGVuZCBkYXRlIG9mIHRoZSBwcmVzZXQgcmFuZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZW5kOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIGxhYmVsIHN0cmluZyBvZiB0aGUgcHJlc2V0IHJhbmdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBsYWJlbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBzdGFydCBkYXRlIG9mIHRoZSBwcmVzZXQgcmFuZ2UuXG4gICAgICovXG4gICAgcHVibGljIHN0YXJ0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcmVzZXQgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1kYXRlcmFuZ2VwaWNrZXI+ZS1wcmVzZXRzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKFByZXNldERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBQcmVzZXRzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFByZXNldHNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3ByZXNldHMnKTtcbiAgICB9XG59Il19