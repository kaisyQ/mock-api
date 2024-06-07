import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FlowModel } from "../models/flow.model";


@Injectable()
export class FlowService {
    
    constructor(
        private httpClient: HttpClient
    ) {}

    loadFlows() {
        return [
            new FlowModel(1, new Date(), "Test flow", 'REST API for books webshop', 'Books webshop')
        ]
    }   
}