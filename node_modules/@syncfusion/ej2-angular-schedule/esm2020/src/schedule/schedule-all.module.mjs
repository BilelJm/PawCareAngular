import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleModule } from './schedule.module';
import { Day, Week, WorkWeek, Month, Year, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop, ExcelExport, ICalendarExport, ICalendarImport, Print } from '@syncfusion/ej2-schedule';
import * as i0 from "@angular/core";
export const DayService = { provide: 'ScheduleDay', useValue: Day };
export const WeekService = { provide: 'ScheduleWeek', useValue: Week };
export const WorkWeekService = { provide: 'ScheduleWorkWeek', useValue: WorkWeek };
export const MonthService = { provide: 'ScheduleMonth', useValue: Month };
export const YearService = { provide: 'ScheduleYear', useValue: Year };
export const AgendaService = { provide: 'ScheduleAgenda', useValue: Agenda };
export const MonthAgendaService = { provide: 'ScheduleMonthAgenda', useValue: MonthAgenda };
export const TimelineViewsService = { provide: 'ScheduleTimelineViews', useValue: TimelineViews };
export const TimelineMonthService = { provide: 'ScheduleTimelineMonth', useValue: TimelineMonth };
export const TimelineYearService = { provide: 'ScheduleTimelineYear', useValue: TimelineYear };
export const ResizeService = { provide: 'ScheduleResize', useValue: Resize };
export const DragAndDropService = { provide: 'ScheduleDragAndDrop', useValue: DragAndDrop };
export const ExcelExportService = { provide: 'ScheduleExcelExport', useValue: ExcelExport };
export const ICalendarExportService = { provide: 'ScheduleICalendarExport', useValue: ICalendarExport };
export const ICalendarImportService = { provide: 'ScheduleICalendarImport', useValue: ICalendarImport };
export const PrintService = { provide: 'SchedulePrint', useValue: Print };
/**
 * NgModule definition for the Schedule component with providers.
 */
export class ScheduleAllModule {
}
ScheduleAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ScheduleAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, imports: [CommonModule, ScheduleModule], exports: [ScheduleModule] });
ScheduleAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        YearService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,
        TimelineYearService,
        ResizeService,
        DragAndDropService,
        ExcelExportService,
        ICalendarExportService,
        ICalendarImportService,
        PrintService
    ], imports: [[CommonModule, ScheduleModule], ScheduleModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ScheduleModule],
                    exports: [
                        ScheduleModule
                    ],
                    providers: [
                        DayService,
                        WeekService,
                        WorkWeekService,
                        MonthService,
                        YearService,
                        AgendaService,
                        MonthAgendaService,
                        TimelineViewsService,
                        TimelineMonthService,
                        TimelineYearService,
                        ResizeService,
                        DragAndDropService,
                        ExcelExportService,
                        ICalendarExportService,
                        ICalendarImportService,
                        PrintService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zY2hlZHVsZS9zY2hlZHVsZS1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUsvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBQyxNQUFNLDBCQUEwQixDQUFBOztBQUdyTixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDLENBQUM7QUFDbEYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFrQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ3JGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQ2pHLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUN4RixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDckYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDM0YsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUMxRyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQ2hILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFDaEgsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUM3RyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUMzRixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQzFHLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDMUcsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUMsQ0FBQztBQUN0SCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDO0FBQ3RILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUV4Rjs7R0FFRztBQXlCSCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsWUF2QmhCLFlBQVksRUFBRSxjQUFjLGFBRWxDLGNBQWM7K0dBcUJULGlCQUFpQixhQW5CaEI7UUFDTixVQUFVO1FBQ1YsV0FBVztRQUNYLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixZQUFZO0tBQ2YsWUFyQlEsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLEVBRW5DLGNBQWM7MkZBcUJULGlCQUFpQjtrQkF4QjdCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFO3dCQUNMLGNBQWM7cUJBQ2pCO29CQUNELFNBQVMsRUFBQzt3QkFDTixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QixZQUFZO3FCQUNmO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWaWV3RGlyZWN0aXZlLCBWaWV3c0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlld3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlc291cmNlRGlyZWN0aXZlLCBSZXNvdXJjZXNEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc291cmNlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGVhZGVyUm93RGlyZWN0aXZlLCBIZWFkZXJSb3dzRGlyZWN0aXZlIH0gZnJvbSAnLi9oZWFkZXJyb3dzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVkdWxlTW9kdWxlIH0gZnJvbSAnLi9zY2hlZHVsZS5tb2R1bGUnO1xuaW1wb3J0IHtEYXksIFdlZWssIFdvcmtXZWVrLCBNb250aCwgWWVhciwgQWdlbmRhLCBNb250aEFnZW5kYSwgVGltZWxpbmVWaWV3cywgVGltZWxpbmVNb250aCwgVGltZWxpbmVZZWFyLCBSZXNpemUsIERyYWdBbmREcm9wLCBFeGNlbEV4cG9ydCwgSUNhbGVuZGFyRXhwb3J0LCBJQ2FsZW5kYXJJbXBvcnQsIFByaW50fSBmcm9tICdAc3luY2Z1c2lvbi9lajItc2NoZWR1bGUnXG5cblxuZXhwb3J0IGNvbnN0IERheVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTY2hlZHVsZURheScsIHVzZVZhbHVlOiBEYXl9O1xuZXhwb3J0IGNvbnN0IFdlZWtTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU2NoZWR1bGVXZWVrJywgdXNlVmFsdWU6IFdlZWt9O1xuZXhwb3J0IGNvbnN0IFdvcmtXZWVrU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NjaGVkdWxlV29ya1dlZWsnLCB1c2VWYWx1ZTogV29ya1dlZWt9O1xuZXhwb3J0IGNvbnN0IE1vbnRoU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NjaGVkdWxlTW9udGgnLCB1c2VWYWx1ZTogTW9udGh9O1xuZXhwb3J0IGNvbnN0IFllYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU2NoZWR1bGVZZWFyJywgdXNlVmFsdWU6IFllYXJ9O1xuZXhwb3J0IGNvbnN0IEFnZW5kYVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTY2hlZHVsZUFnZW5kYScsIHVzZVZhbHVlOiBBZ2VuZGF9O1xuZXhwb3J0IGNvbnN0IE1vbnRoQWdlbmRhU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NjaGVkdWxlTW9udGhBZ2VuZGEnLCB1c2VWYWx1ZTogTW9udGhBZ2VuZGF9O1xuZXhwb3J0IGNvbnN0IFRpbWVsaW5lVmlld3NTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU2NoZWR1bGVUaW1lbGluZVZpZXdzJywgdXNlVmFsdWU6IFRpbWVsaW5lVmlld3N9O1xuZXhwb3J0IGNvbnN0IFRpbWVsaW5lTW9udGhTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnU2NoZWR1bGVUaW1lbGluZU1vbnRoJywgdXNlVmFsdWU6IFRpbWVsaW5lTW9udGh9O1xuZXhwb3J0IGNvbnN0IFRpbWVsaW5lWWVhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTY2hlZHVsZVRpbWVsaW5lWWVhcicsIHVzZVZhbHVlOiBUaW1lbGluZVllYXJ9O1xuZXhwb3J0IGNvbnN0IFJlc2l6ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTY2hlZHVsZVJlc2l6ZScsIHVzZVZhbHVlOiBSZXNpemV9O1xuZXhwb3J0IGNvbnN0IERyYWdBbmREcm9wU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NjaGVkdWxlRHJhZ0FuZERyb3AnLCB1c2VWYWx1ZTogRHJhZ0FuZERyb3B9O1xuZXhwb3J0IGNvbnN0IEV4Y2VsRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NjaGVkdWxlRXhjZWxFeHBvcnQnLCB1c2VWYWx1ZTogRXhjZWxFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IElDYWxlbmRhckV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTY2hlZHVsZUlDYWxlbmRhckV4cG9ydCcsIHVzZVZhbHVlOiBJQ2FsZW5kYXJFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IElDYWxlbmRhckltcG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdTY2hlZHVsZUlDYWxlbmRhckltcG9ydCcsIHVzZVZhbHVlOiBJQ2FsZW5kYXJJbXBvcnR9O1xuZXhwb3J0IGNvbnN0IFByaW50U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ1NjaGVkdWxlUHJpbnQnLCB1c2VWYWx1ZTogUHJpbnR9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBTY2hlZHVsZSBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2NoZWR1bGVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU2NoZWR1bGVNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIERheVNlcnZpY2UsXG4gICAgICAgIFdlZWtTZXJ2aWNlLFxuICAgICAgICBXb3JrV2Vla1NlcnZpY2UsXG4gICAgICAgIE1vbnRoU2VydmljZSxcbiAgICAgICAgWWVhclNlcnZpY2UsXG4gICAgICAgIEFnZW5kYVNlcnZpY2UsXG4gICAgICAgIE1vbnRoQWdlbmRhU2VydmljZSxcbiAgICAgICAgVGltZWxpbmVWaWV3c1NlcnZpY2UsXG4gICAgICAgIFRpbWVsaW5lTW9udGhTZXJ2aWNlLFxuICAgICAgICBUaW1lbGluZVllYXJTZXJ2aWNlLFxuICAgICAgICBSZXNpemVTZXJ2aWNlLFxuICAgICAgICBEcmFnQW5kRHJvcFNlcnZpY2UsXG4gICAgICAgIEV4Y2VsRXhwb3J0U2VydmljZSxcbiAgICAgICAgSUNhbGVuZGFyRXhwb3J0U2VydmljZSxcbiAgICAgICAgSUNhbGVuZGFySW1wb3J0U2VydmljZSxcbiAgICAgICAgUHJpbnRTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUFsbE1vZHVsZSB7IH0iXX0=