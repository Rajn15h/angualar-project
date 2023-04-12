import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})

export class ListUsersComponent {
  listUsers: any;
  constructor(private userService:UserService){}

  ngOnInit():void{
    this.userService.listusers().subscribe(data=>{
      this.listUsers=data;
    })
  }
}
