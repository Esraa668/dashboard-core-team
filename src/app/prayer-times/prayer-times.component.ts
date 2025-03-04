import { Component, OnInit } from '@angular/core';
import { PrayerService } from '../services/prayer-reminder.service';

@Component({
  selector: 'app-prayer-times',
  standalone: true,
  templateUrl: './prayer-times.component.html',
  styleUrls: ['./prayer-times.component.scss'],
})
export class PrayerTimesComponent implements OnInit {
  prayerTimes: any;

  constructor(private prayerService: PrayerService) {}

  ngOnInit(): void {
    this.loadPrayerTimes();
  }

  loadPrayerTimes(): void {
    this.prayerService.getPrayerTimes('Cairo', 'Egypt').subscribe(
      (data) => {
        this.prayerTimes = data.data.timings;
        console.log(this.prayerTimes); // لطباعة المواعيد للتحقق
      },
      (error) => {
        console.error('Error loading prayer times:', error);
      }
    );
  }
}
