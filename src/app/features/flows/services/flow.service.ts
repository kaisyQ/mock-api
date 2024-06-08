import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FlowModel } from "../models/flow.model";
import type { CreateFlowParams } from "../params/create-flow.params";

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

    create(params: CreateFlowParams) {
        
    }
}