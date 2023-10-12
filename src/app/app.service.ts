import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
providedIn: 'root',

})

export class CycleService {
  constructor(private _http:HttpClient)

{}


getCycles()

{
  return this._http.get('http://localhost:8080/api/cycles');
}

getBorrowedCycles()

{
  return this._http.get('http://localhost:8080/api/cycles/borrowed')

}

addStock(cycleId: number) {
    const apiUrl = `http://localhost:8080/api/cycles/addStock/${cycleId}`;
    return this._http.put(apiUrl, {});
  }

borrow(cycleId: number) {
      const apiUrl = `http://localhost:8080/api/cycles/borrow/${cycleId}`;
    return this._http.put(apiUrl, {});
  }

addtocart(cycleId: number){
  const apiUrl = `http://localhost:8080/api/cycles/addToCart/${cycleId}`;
  return this._http.put(apiUrl, {});
}

removefromcart(cycleId: number){
  const apiUrl = `http://localhost:8080/api/cycles/removeFromCart/${cycleId}`;
  return this._http.delete(apiUrl, {});
}

checkout() {
  const apiUrl = `http://localhost:8080/api/cycles/checkout`;
  return this._http.put(apiUrl, {});
 
  }

  clearToken() {

    localStorage.removeItem('token');

  }

  addCycle(newCycle: any): Observable<any> {
    const apiUrl = `http://localhost:8080/api/cycles/add`;
    return this._http.put(apiUrl, newCycle);
  }
}