import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userImage: string = './assets/images/rostro.jpg';
  userName: string = 'Web Developer';

  constructor() { }

  ngOnInit(): void {
  }

}
