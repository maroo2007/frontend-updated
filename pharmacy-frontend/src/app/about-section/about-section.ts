import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSectionComponent {
  title = 'About Our Pharmacy';
  description = 'We are a leading provider of high-quality medications and healthcare products. Our mission is to provide accessible and affordable healthcare to everyone. We believe in a patient-first approach, ensuring you get the best care and advice from our team of expert pharmacists.';
}
