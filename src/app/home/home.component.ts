import { Component } from '@angular/core';
import { CycleService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ans=0;
  cycles: any;
  borrowedCycles: any;
  showCycleList = true;
  checkoutResponse= false;
  http: any;

  constructor(private cycleService: CycleService) {}

  ngOnInit() {
    this.cycleService.getCycles().subscribe(res => {
      this.cycles= res;
    });

  }

  addToCart(item:any) {
  
    this.cycleService.addtocart(item.cycleId).subscribe(
    
      (response: any) => {
        console.log('PUT request successful:', response);
        this.ngOnInit();
      },
         );
  
}


removeFromCart(item:any) {
     
  this.cycleService.removefromcart(item.cycleId).subscribe(
  
    (response: any) => {
      console.log('DELETE request successful:', response);
      this.ngOnInit();
    },
       );
}
}


