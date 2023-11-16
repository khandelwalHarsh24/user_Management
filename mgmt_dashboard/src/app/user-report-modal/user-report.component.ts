// src/app/user-report-modal/user-report-modal.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-report-modal',
  template: `
    <h2>User Report</h2>
    <p>Username: {{ data.user.username }}</p>
    <p>Email: {{ data.user.email }}</p>
    <!-- Add other user details as needed -->

    <button (click)="generateReport()">Generate Report</button>`,
  styleUrls: ['./user-report-modal.component.css']
})
export class UserReportModalComponent {
  reportGenerated = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserReportModalComponent>
  ) {}

  generateReport(): void {
    this.data.generateReport = true;
    alert('Report Generation Done');
    this.dialogRef.close(this.data);
  }
}
