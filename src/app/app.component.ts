import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './product-list/product-list.component';
import { TestComponent } from './test/test.component';
import { PrayerTimesComponent } from './prayer-times/prayer-times.component';
import { DhikrComponent } from './dhikr/dhikr.component';
// import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashBoardCoreTeam';
}
