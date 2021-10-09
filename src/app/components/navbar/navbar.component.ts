import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  toggleMenuFlag: boolean = true;
  userImage: string = './assets/images/rostro.jpg';
  userName: string = 'Web Developer';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    var menu = document.getElementById("menu");
    if(this.toggleMenuFlag){
      this.toggleMenuFlag = !this.toggleMenuFlag;
      menu?.classList.add("menu-active")
    }
    else{
      this.toggleMenuFlag = !this.toggleMenuFlag;
      menu?.classList.remove("menu-active")
    }
  }

}
