import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {
  userDetails:any;
  userId:string='';
  
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute){}
  ngOnInit():void{

    this.activatedRoute.params.subscribe(data=>{
      this.userId=data['id'];
    })
    this.userService.viewusers(this.userId).subscribe(data=>{
      this.userDetails=data;
    })
  }
}
