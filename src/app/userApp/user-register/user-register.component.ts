import { userObj } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userObj: userObj;
  constructor( private router: Router) {
    this.userObj =new userObj();
   }

  ngOnInit(): void {
  }

  getNewUserId(){
    debugger;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null){
      const userList = JSON.parse(oldRecords);
      return userList.length + 1;
    }else{
      return 1;
    }
  }
  
  saveUser(){
    debugger;
    const latestId = this.getNewUserId();
    this.userObj.userId=latestId;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null){
      const userList = JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userList));
  } else{
    const userArr = [];
    userArr.push(this.userObj);
    localStorage.setItem('userList', JSON.stringify(userArr));
  }
  this.router.navigateByUrl('/userList');
}

}
