import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelname = 'Hilton Hotel'; // class variables
  numberofrooms = 10; // class  variables
  hide = false; // class variables

  rooms: Room = {
    totalRooms: 25,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomlist: RoomList[] = [
    {
      roomType: 'Delux rooms',
      amenities: '',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('11-nov-2021'),
      photos: '',
      price: 500,
    },
    {
      roomType: 'Delux rooms2',
      amenities: '',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('11-nov-2021'),
      photos: '',
      price: 500,
    },
    {
      roomType: 'Delux rooms3',
      amenities: '',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('11-nov-2021'),
      photos: '',
      price: 500,
    },
    {
      roomType: 'Delux rooms4',
      amenities: 'Air conditon, Free Wi-fi, Tv, Bathroom, Kitchen',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('11-nov-2021'),
      photos: '',
      price: 500,
    },
    {
      roomType: 'Delux rooms5',
      amenities: '',
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('11-nov-2021'),
      photos: '',
      price: 500,
    },
  ];

  constructor() {}
  // class method
  toggle() {
    this.hide = !this.hide;
  }
  // why we need this figure out.
  ngOnInit(): void {}
}
// start from directive 3hr:25min:52sec
