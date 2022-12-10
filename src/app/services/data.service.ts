import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { initialize } from '@ionic/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
const STORAGE_KEY = "mylist";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage,private http: HttpClient) { 
    this.init();
  }
  init(){
    this.storage.create();
  }

  getData(){
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData(item){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  
  async removeItem(index){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.splice(index, 1);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  
}
