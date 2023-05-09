import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from './multiselect.module';
import { CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import * as i0 from "@angular/core";
export const CheckBoxSelectionService = { provide: 'DropDownsCheckBoxSelection', useValue: CheckBoxSelection };
/**
 * NgModule definition for the MultiSelect component with providers.
 */
export class MultiSelectAllModule {
}
MultiSelectAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiSelectAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MultiSelectAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiSelectAllModule, imports: [CommonModule, MultiSelectModule], exports: [MultiSelectModule] });
MultiSelectAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiSelectAllModule, providers: [
        CheckBoxSelectionService
    ], imports: [[CommonModule, MultiSelectModule], MultiSelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiSelectAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MultiSelectModule],
                    exports: [
                        MultiSelectModule
                    ],
                    providers: [
                        CheckBoxSelectionService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tdWx0aS1zZWxlY3QvbXVsdGlzZWxlY3QtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkJBQTJCLENBQUE7O0FBRzNELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFrQixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztBQUU3SDs7R0FFRztBQVVILE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixZQVJuQixZQUFZLEVBQUUsaUJBQWlCLGFBRXJDLGlCQUFpQjtrSEFNWixvQkFBb0IsYUFKbkI7UUFDTix3QkFBd0I7S0FDM0IsWUFOUSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxFQUV0QyxpQkFBaUI7MkZBTVosb0JBQW9CO2tCQVRoQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQztvQkFDMUMsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLHdCQUF3QjtxQkFDM0I7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICcuL211bHRpc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQge0NoZWNrQm94U2VsZWN0aW9ufSBmcm9tICdAc3luY2Z1c2lvbi9lajItZHJvcGRvd25zJ1xuXG5cbmV4cG9ydCBjb25zdCBDaGVja0JveFNlbGVjdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdEcm9wRG93bnNDaGVja0JveFNlbGVjdGlvbicsIHVzZVZhbHVlOiBDaGVja0JveFNlbGVjdGlvbn07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIE11bHRpU2VsZWN0IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNdWx0aVNlbGVjdE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBNdWx0aVNlbGVjdE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgQ2hlY2tCb3hTZWxlY3Rpb25TZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdEFsbE1vZHVsZSB7IH0iXX0=