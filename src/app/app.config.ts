import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environment";


export const APP_SERVICE_CONFIG = new InjectionToken<any>("app-config");

export const APP_CONFIG = {
    apiEndpoint : environment.apiEndpoint
}