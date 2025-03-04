import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';

@Component({
  selector: 'app-dhikr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dhikr.component.html',
  styleUrls: ['./dhikr.component.scss'],
})
export class DhikrComponent {
  intervalId: any;

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
