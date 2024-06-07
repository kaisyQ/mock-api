import { FlowService } from './../../services/flow.service';
import { FlowsItemComponent } from '../flows-item/flows-item.component';
import { Component, OnInit } from "@angular/core";
import { FlowModel } from '../../models/flow.model';

@Component({
    selector: 'app-flows-list',
    standalone: true,
    styleUrls: ['./flows-list.component.scss'],
    templateUrl: './flows-list.component.html',
    imports: [FlowsItemComponent],
    providers: [FlowService]
})
export class FlowsListComponent implements OnInit {

    flows: Array<FlowModel> = []; 

    constructor(
        private flowService: FlowService
    ) {}

    ngOnInit(): void {
        this.flows = this.flowService.loadFlows();
    }

}   