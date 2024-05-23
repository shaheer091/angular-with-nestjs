import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { environment } from "src/environment/environment.prod";

@Injectable({
    providedIn:'root'
})
export class NotificationService {
    socket:any;
    connectSocket(){
        return this.socket = io(environment.apiUrl)
    }
}