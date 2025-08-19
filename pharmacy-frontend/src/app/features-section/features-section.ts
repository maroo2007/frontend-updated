import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css'
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'assets/icons/delivery.svg', // Placeholder path
      title: 'Fast Delivery',
      description: 'Get your medications delivered to your door in record time.'
    },
    {
      icon: 'assets/icons/support.svg', // Placeholder path
      title: '24/7 Support',
      description: 'Our team of experts is available around the clock to help you.'
    },
    {
      icon: 'assets/icons/products.svg', // Placeholder path
      title: 'Wide Range of Products',
      description: 'We offer a vast selection of healthcare and wellness products.'
    }
  ];
}
