import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail, NavController } from '@ionic/angular';
import { map, share, Subscription, timer } from 'rxjs';

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
 taskList = [];
 done=[];
  taskName: any;
  



  constructor(public navCtrl: NavController) { }

 
  addTask() {
    // makes sure na walay 0 input and saving 'taskName' into variable task
    //before pushing it to the array para maretreieve and whole array sa page.html
    if (this.taskName.length > 0) { 
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = "";
    }
  }

  // transfer data from taskList[] na array to done[] array 
  // and delete the specific index sa taskList[] na natransfer sa done[]
  transfer(index){
    let task =  this.taskList[index];
    this.done.push(task);
     this.taskName = "";
     this.taskList.splice(index, 1); 
  }

//delete selected task
deleteTask(index){
  this.done.splice(index, 1); 
 
}

  ngOnInit() {
     // Para sa time
     this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

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
