import { FlowsItemComponent } from '../flows-item/flows-item.component';
import { Component } from "@angular/core";

@Component({
    selector: 'app-flows-list',
    standalone: true,
    styleUrls: ['./flows-list.component.scss'],
    templateUrl: './flows-list.component.html',
    imports: [FlowsItemComponent]
})
export class FlowsListComponent {
    
}