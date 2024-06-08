import { Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FlowService } from "../../services/flow.service";


@Component({
    selector: 'app-flows-create-form',
    standalone: true,
    templateUrl: './create-flow-form.component.html',
    styleUrls: ['./create-flow-form.component.scss'],
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
    providers: [FlowService]
})
export class CreateFlowForm {

    name = signal('');
    description = signal('');
    group = signal('');

    constructor(
        private flowService: FlowService
    ) {}

    createNewFlow(name: string, description: string, group: string) {
        this.flowService.create({
            name,
            description,
            group
        });
    }
}