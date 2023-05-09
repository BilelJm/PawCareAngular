import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from './datepicker.module';
import { MaskedDateTime } from '@syncfusion/ej2-calendars';
import * as i0 from "@angular/core";
export const MaskedDateTimeService = { provide: 'CalendarsMaskedDateTime', useValue: MaskedDateTime };
/**
 * NgModule definition for the DatePicker component with providers.
 */
export class DatePickerAllModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUE7O0FBR3hELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFrQixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUM7QUFFcEg7O0dBRUc7QUFVSCxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsWUFSbEIsWUFBWSxFQUFFLGdCQUFnQixhQUVwQyxnQkFBZ0I7aUhBTVgsbUJBQW1CLGFBSmxCO1FBQ04scUJBQXFCO0tBQ3hCLFlBTlEsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsRUFFckMsZ0JBQWdCOzJGQU1YLG1CQUFtQjtrQkFUL0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxnQkFBZ0I7cUJBQ25CO29CQUNELFNBQVMsRUFBQzt3QkFDTixxQkFBcUI7cUJBQ3hCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi9kYXRlcGlja2VyLm1vZHVsZSc7XG5pbXBvcnQge01hc2tlZERhdGVUaW1lfSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2FsZW5kYXJzJ1xuXG5cbmV4cG9ydCBjb25zdCBNYXNrZWREYXRlVGltZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDYWxlbmRhcnNNYXNrZWREYXRlVGltZScsIHVzZVZhbHVlOiBNYXNrZWREYXRlVGltZX07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIERhdGVQaWNrZXIgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERhdGVQaWNrZXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGF0ZVBpY2tlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgTWFza2VkRGF0ZVRpbWVTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQWxsTW9kdWxlIHsgfSJdfQ==