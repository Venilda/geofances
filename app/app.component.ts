import { Component } from "@angular/core";
import geolocation = require("nativescript-geolocation");

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    onInit(){
    }
    public enableLocationTap() { 
        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
        }
    }
    public buttonGetLocationTap() {
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            console.log("Current location is: " + loc);
        }
    }, function(e){
        console.log("Error: " + e.message);
    });
}
}
