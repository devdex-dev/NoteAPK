import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { IonNote, IonRouterOutlet, ItemReorderEventDetail, NavController, Platform } from '@ionic/angular';
import { map, share, Subscription, timer } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // For the time
  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;

  // For the tasks
 taskList:any = [];
 done=[];
  taskName: any;
  



  constructor(public navCtrl: NavController, private dataService: DataService,private http: HttpClient, private platform: Platform,   @Optional() private routerOutlet?: IonRouterOutlet){ 
    this.loadTask();

    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

 
  async loadTask(){
    this.taskList = await this.dataService.getData();
  }

  async addTask(){
    if (this.taskName.length > 0) {
    let task = this.taskName;
    await this.dataService.addData(task);
    this.taskList.push(task);
    this.taskName = "";
    this.loadTask();
    }
  }

 

  async deleteTask(index){
     this.dataService.removeItem(index);
     this.taskList.splice(index, 1);
  
  }


//   addTask() {
//     // makes sure na walay 0 input and saving 'taskName' into variable task
//     //before pushing it to the array para maretreieve and whole array sa page.html
//     if (this.taskName.length > 0) { 
//       let task = this.taskName;
//       this.taskList.push(task);
//       this.taskName = "";
//     }
//   }

//   // transfer data from taskList[] na array to done[] array 
//   // and delete the specific index sa taskList[] na natransfer sa done[]
//   transfer(index){
//     let task =  this.taskList[index];
//     this.done.push(task);
//      this.taskName = "";
//      this.taskList.splice(index, 1); 
//   }

// //delete selected task
// deleteTask(index){
//   this.done.splice(index, 1); 
 
// }

  ngOnInit() {

   

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
      
    
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  };
   

}
