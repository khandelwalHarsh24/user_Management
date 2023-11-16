import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  newUser = {
    username: '',
    password: '',
    email: '',
    phone: '',
  };
  constructor(private userService: UserService,private route: Router) { }

  ngOnInit(): void {
  }

  createAccount(){
    this.userService.createUser(this.newUser).subscribe(
      (response) => {
        alert('Acoount Created Successfully');
        this.route.navigateByUrl('');
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

}
