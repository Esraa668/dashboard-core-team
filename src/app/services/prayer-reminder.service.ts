import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PrayerService {
  private apiUrl = 'http://api.aladhan.com/v1/timingsByCity';

  constructor(private http: HttpClient) {}

  getPrayerTimes(city: string, country: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}?city=${city}&country=${country}&method=2`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching prayer times', error);
          throw error; // إعادة رمي الخطأ أو التعامل معه
        })
      );
  }
}
