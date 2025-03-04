import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  baseUrl: string = `https://ctrl-p.runasp.net/api/`;

  private authToken: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJqdGkiOiI3YTliMTA1MS0xYjA2LTRkNmItYjk0Ny0yODAwZWQzMTQ0ODkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiMSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0IiwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE1NyIsImV4cCI6MTczNDg1MTU5NSwiaWF0IjoxNzM0NzkxNTk1LCJuYmYiOjE3MzQ3OTE1OTV9.m11Ftqdtj9DR2ajBJB4zXHrix8H5yz749KCihPVcuq8';
  setAuthToken(newToken: string): void {
    this.authToken = newToken;
  }

  // Get the list of products
  getProductlist(): Observable<any> {
    return this._http.get(this.baseUrl + 'Product/GetAllProducts/');
  }
}
