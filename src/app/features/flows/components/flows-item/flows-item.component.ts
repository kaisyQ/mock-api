import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";


@Component({
    selector: 'app-flows-item',
    standalone: true,
    styleUrls: ['./flows-item.component.scss'],
    templateUrl: './flows-item.component.html',
    imports: [MatCardModule, MatButtonModule]
})
export class FlowsItemComponent {
    date = `${(new Date()).toISOString()}`
}