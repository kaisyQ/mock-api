import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";


@Component({
    selector: 'app-flows-create-form',
    standalone: true,
    templateUrl: './create-flow-form.component.html',
    styleUrls: ['./create-flow-form.component.scss'],
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule]
})
export class CreateFlowForm {
    
}