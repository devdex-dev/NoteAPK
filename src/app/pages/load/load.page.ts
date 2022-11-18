import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['home']);
   }
}
