import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    ToastModule,
    RouterLink,
    DropdownModule,
    InputTextModule,
    RouterModule,
  ],
  providers: [MessageService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  constructor(private router: Router) {}
  statuses!: SelectItem[];
  list: any[] = [];
  ProductService = inject(ProductService);
  messageService = inject(MessageService);

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.ProductService.getProductlist().subscribe((data: any) => {
      this.list = data.map((product: any) => ({
        ...product,
        inventoryStatus: this.getRandomStatus(),
        // inventoryStatus: this.getDefaultStatus(product),
        date: this.getRandomDate(),
        trackingId: this.getRandomTrackingId(),
        paymentMode: this.getRandomPaymentMode(),
      }));

      this.statuses = [
        { label: 'Delivered', value: 'Delivered' },
        { label: 'Process', value: 'Process' },
        { label: 'Canceled', value: 'Canceled' },
      ];
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Delivered':
        return 'status-Delivered';
      case 'Process':
        return 'status-Process';
      case 'Canceled':
        return 'status-Canceled';
      default:
        return '';
    }
  }
  getRandomStatus(): string {
    const statuses = ['Delivered', 'Process', 'Canceled']; // List of possible statuses
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
  getRandomDate(): string {
    const startDate = new Date(2020, 0, 1);
    const endDate = new Date();
    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );
    return randomDate.toLocaleDateString();
  }

  getRandomPaymentMode(): string {
    const paymentModes = ['Credit Card', 'Cash', 'Bank Transfer'];
    return paymentModes[Math.floor(Math.random() * paymentModes.length)];
  }
  getRandomTrackingId(): string {
    const randomId = Math.floor(Math.random() * 1000000000);
    return `#${randomId}`;
  }

  add() {
    this.router.navigate(['/add']);
  }
}
