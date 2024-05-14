import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private userServ: UserService) {}
  @ViewChild('videoElement') videoElement: any;
  showBtn: boolean = false;
  photoDataUrl: any;
  showUseBtn: boolean = false;

  logout() {
    this.userServ.logout();
  }
  openCamera() {
    // Access the user's camera
    this.photoDataUrl = '';
    this.showBtn = true;
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }
  capturePhoto() {
    this.showBtn = false;
    // Capture photo from video stream
    const video = this.videoElement.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas
      .getContext('2d')
      ?.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.photoDataUrl = canvas.toDataURL('image/png');

    // Use the captured photo data for login or other purposes
    console.log('Captured photo:', this.photoDataUrl);

    // Stop the video stream
    const stream = video.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
    this.showUseBtn = true;
  }
  useThisImage() {
    if (!this.photoDataUrl) {
      alert('Please take a picture first');
      return;
    } else {
      this.userServ.setUserProfile(this.photoDataUrl).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
