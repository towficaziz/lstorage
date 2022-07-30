import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  userObj: userObj;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.userObj =new userObj();
    this.route.params.subscribe((res)=>{
      this.userObj.userId = res['id']
    })
   }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      const currentUser = userList.find((m: any) => m.userId == this.userObj.userId);
      if(currentUser !== undefined){
        this.userObj.userName= currentUser.userName;
        this.userObj.userCity= currentUser.userCity;
        this.userObj.userState= currentUser.userState;
        this.userObj.userMobile= currentUser.userMobile;
        this.userObj.userAltMobile= currentUser.userAltMobile;
      }
    }
  }

 
  
  updateUser(){
    debugger;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null){
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any) => a.userId == this.userObj.userId),1)
      userList.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userList));
  }
  this.router.navigateByUrl('/userList');
}

}
