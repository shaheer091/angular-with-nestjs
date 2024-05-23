import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { environment } from 'src/environment/environment.prod';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  socket: any;
  constructor(private router:Router, private notiServ:NotificationService) {}
  ngOnInit(): void {
    this.socket = this.notiServ.socket
    console.log(this.socket);
    this.socket.on('event', (message: string) => {
      const seeNow = confirm(message)
      if (seeNow) {
        this.router.navigate(['/user/home'])
      }
    });
  }
}
