import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateFlowForm } from "../../components/create-flow-form/create-flow-form.component";


@Component({
    selector: 'app-page-flows',
    standalone: true,
    styleUrls: ['./flows.component.scss'],
    templateUrl: './flows.component.html',
    imports: [RouterModule, CreateFlowForm]
})

export class FlowsComponent {

}