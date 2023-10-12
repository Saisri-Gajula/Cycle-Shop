import { Component } from '@angular/core';
import { CycleService } from '../app.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {
  ans=0;
  newData: any;
  borrowedCycles: any;
  showData = true;
  checkoutResponse= false;
  http: any;
  cartItems:any;


  constructor(private cycleService: CycleService) {}

  ngOnInit() {
    this.cycleService.getCycles().subscribe(res => {
      this.newData = res; 
    });

    this.cycleService.getBorrowedCycles().subscribe(res => {
      this.borrowedCycles = res;
    });
  }

  toggleDataVisibility() {
    this.showData = !this.showData;
  }

  addToreturn(item:any) {
      this.cycleService.addtocart(item.cycleId).subscribe(
        (response: any) => {
          console.log('PUT request successful:', response);
          this.ngOnInit();
        },
           );
    }

  addtocycle(item:any) {
      this.cycleService.removefromcart(item.cycleId).subscribe(
        (response: any) => {
          console.log('DELETE request successful:', response);
          this.ngOnInit();
        },
           );
  }

  checkDataVisibility() {
    this.checkoutResponse= !this.checkoutResponse;
  }

  checkout() {
    this.cycleService.checkout().subscribe(
        (response: any) => {
            console.log(response);
            
          this.checkoutResponse= !this.checkoutResponse;
          this.ans = response;
          this.ngOnInit();
        },
        (error: any) => {
          console.error('Error during checkout:', error);
        
        }
        
      );
}


}
