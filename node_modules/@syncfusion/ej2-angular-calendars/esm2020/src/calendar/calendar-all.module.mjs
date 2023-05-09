import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar.module';
import { Islamic } from '@syncfusion/ej2-calendars';
import * as i0 from "@angular/core";
export const IslamicService = { provide: 'CalendarsIslamic', useValue: Islamic };
/**
 * NgModule definition for the Calendar component with providers.
 */
export class CalendarAllModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jYWxlbmRhci9jYWxlbmRhci1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDJCQUEyQixDQUFBOztBQUdqRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztBQUUvRjs7R0FFRztBQVVILE1BQU0sT0FBTyxpQkFBaUI7OzhHQUFqQixpQkFBaUI7K0dBQWpCLGlCQUFpQixZQVJoQixZQUFZLEVBQUUsY0FBYyxhQUVsQyxjQUFjOytHQU1ULGlCQUFpQixhQUpoQjtRQUNOLGNBQWM7S0FDakIsWUFOUSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsRUFFbkMsY0FBYzsyRkFNVCxpQkFBaUI7a0JBVDdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFO3dCQUNMLGNBQWM7cUJBQ2pCO29CQUNELFNBQVMsRUFBQzt3QkFDTixjQUFjO3FCQUNqQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSB9IGZyb20gJy4vY2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7SXNsYW1pY30gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNhbGVuZGFycydcblxuXG5leHBvcnQgY29uc3QgSXNsYW1pY1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDYWxlbmRhcnNJc2xhbWljJywgdXNlVmFsdWU6IElzbGFtaWN9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBDYWxlbmRhciBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2FsZW5kYXJNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2FsZW5kYXJNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIElzbGFtaWNTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckFsbE1vZHVsZSB7IH0iXX0=