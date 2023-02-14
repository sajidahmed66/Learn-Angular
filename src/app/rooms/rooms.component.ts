import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelname = 'Hilton Hotel';
  numberofrooms = 10;
  hide = false;
  constructor() {}
  toggle() {
    this.hide = !this.hide;
  }
  ngOnInit(): void {}
}
// start from directive 3hr:25min:52sec
