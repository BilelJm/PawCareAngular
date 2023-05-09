import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresetDirective, PresetsDirective } from './presets.directive';
import { DateRangePickerComponent } from './daterangepicker.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the DateRangePicker component.
 */
export class DateRangePickerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRXZFOztHQUVHO0FBY0gsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQVYxQix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLGdCQUFnQixhQUpWLFlBQVksYUFPbEIsd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixnQkFBZ0I7bUhBR1gscUJBQXFCLFlBWnJCLENBQUMsWUFBWSxDQUFDOzJGQVlkLHFCQUFxQjtrQkFiakMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVix3QkFBd0I7d0JBQ3hCLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGdCQUFnQjtxQkFDbkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByZXNldERpcmVjdGl2ZSwgUHJlc2V0c0RpcmVjdGl2ZSB9IGZyb20gJy4vcHJlc2V0cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgRGF0ZVJhbmdlUGlja2VyIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBQcmVzZXREaXJlY3RpdmUsXG4gICAgICAgIFByZXNldHNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBQcmVzZXREaXJlY3RpdmUsXG4gICAgICAgIFByZXNldHNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlck1vZHVsZSB7IH0iXX0=