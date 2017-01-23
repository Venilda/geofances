import { Component } from "@angular/core";
import geolocation = require("nativescript-geolocation");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    
        public enableLocationTap() { 
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    }
}
