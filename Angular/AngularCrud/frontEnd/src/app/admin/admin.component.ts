import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];
  selectedUser: User = {id: 0, nume: '', prenume:'', email:'', };
  constructor(private apiService: ApiService) { }


  ngOnInit(): void {}
  
  
  createUser(form:{value:User;}){
    if(this.selectedUser && this.selectedUser.id){
      // this.apiService.updateUser(this.selectedUser.id, form.value).subscribe((user:User) => {
      //   console.log('user update', user)
      }
      else {
        this.apiService.createUser(form.value).subscribe((user:User) => {
          console.log('user create', user);
        })
      }

  }
}
