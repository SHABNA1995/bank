import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data="Happy Banking With Us"
  pdata="Enter Account Number"
  acno:any=""
  psw:any=""
  serviceData=" "
  constructor(private home:Router,private Ds:DataService){// dependency injection
  


  }
  ngOnInit(): void {
    this.serviceData=this.Ds.sData
    
  }
 

   Login(): void{
  //  this.acno=a.value;
  //  this.psw=b.value;
  //  console.log(this.acno);
  //  console.log(this.psw);\
  this.Ds.AccessData("haai")
  this.home.navigateByUrl("home")
  //  }
    
}


}