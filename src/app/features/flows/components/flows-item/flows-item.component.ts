import { Component, Input } from "@angular/core";
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
    @Input()
    public id?: number;

    @Input()
    public name?: string;
    @Input()
    
    public createdAt?: string;

    @Input()
    public description?: string;

    @Input()
    public groupName?: string;
}