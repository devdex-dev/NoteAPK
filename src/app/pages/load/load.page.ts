import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console } from 'console';
import { write } from 'fs';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  constructor(private router: Router) { }

  
  home(){
  console.log('EEE');
    this.router.navigate(['home']);
   }

  ngOnInit() {
    

      const checkView = localStorage.getItem('pageDisplayed');
      if (checkView) {
        this.router.navigate(['home']);
      }
      localStorage.setItem('pageDisplayed', 'ok');
 }
  }


