import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sData="data inside a service file"

  constructor() { }

AccessData(Data:any){
console.log(Data);

}

}


