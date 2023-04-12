import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  
  addUserForm:FormGroup=new FormGroup({});
  constructor(private formBuilder:FormBuilder,private userService:UserService){}

  ngOnInit():void{
    this.addUserForm=this.formBuilder.group({
      'username':new FormControl(''),
      'email':new FormControl('')
    })
  }
  createUser(){
    this.userService.addUser(this.addUserForm.value).subscribe(data=>{
      console.log('User Created')
    },err=>{
      console.log(err);
    })
  }
}
