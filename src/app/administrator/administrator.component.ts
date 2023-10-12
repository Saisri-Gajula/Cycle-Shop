import { Component, OnInit } from '@angular/core';
import { CycleService } from '../app.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  newData:any;
  newCycle: any = { model: '', stock: 0 };
  constructor(private cycleService: CycleService) {}

  ngOnInit() {
    this.cycleService.getCycles().subscribe(res => {
      this.newData = res; 
    });
  }


 performAction(item:any) {
      this.cycleService.addStock(item.cycleId).subscribe(
        
        (response: any) => {
          console.log('PUT request successful:', response);
          this.ngOnInit();
        },
           );
    }
  
    performAction2(item: any) {
      this.cycleService.borrow(item.cycleId).subscribe(
        
        (response: any) => {
          console.log('PUT request successful:', response);
          this.ngOnInit();
        },
           );
    }

    submitCycle() {
    this.cycleService.addCycle(this.newCycle).subscribe(
      (response) => {
        console.log('Cycle added successfully:', response);
        // Clear the form fields after successful submission
        this.newCycle = { model: '', stock: 0 };
        this.ngOnInit();
      },
      (error) => {
        // Handle any errors that may occur
        console.error('An error occurred:', error);
      }
    );
  }

  
  }

