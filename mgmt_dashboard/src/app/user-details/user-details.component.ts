import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import {UserReportModalComponent} from '../user-report-modal/user-report.component'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  searchInput = '';
  users: any[] = []; // Change 'any' to the actual type of your user object
  filteredUsers: any[] = [];

  constructor(private userService: UserService,private dialog: MatDialog) {}



  openUserReportModal(user: any): void {
    const dialogRef = this.dialog.open(UserReportModalComponent, {
      data: { user, reportData: null }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.generateReport) {
        this.generateUserReport(user);
      }
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  searchUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(this.searchInput.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchInput.toLowerCase()) ||
      user.phone.toLowerCase().includes(this.searchInput.toLowerCase()) 
    );
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;  
        this.filteredUsers = response;
      },
      (error) => {
        console.error('Error loading users:', error);
        // Handle error, show a message, etc.
      }
    );
  }

  private generateUserReport(user: any): void {
    // Implement report generation logic here if needed
    console.log('Generating report for user:', user);
    // this.openUserReportModal(user);
  }

}
