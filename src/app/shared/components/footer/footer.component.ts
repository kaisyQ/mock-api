import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
    selector: 'app-footer',
    standalone: true,
    styleUrls: ['./footer.component.scss', './../../styles/fonts.scss'],
    templateUrl: './footer.component.html',
    imports: [MatToolbarModule]
})
export class FooterComponent {
    date = `© ${(new Date()).getFullYear()}, Roma Korygin project`
}