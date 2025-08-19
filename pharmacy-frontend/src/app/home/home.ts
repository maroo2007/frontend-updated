import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section';
import { AboutSectionComponent } from '../about-section/about-section';
import { FeaturesSectionComponent } from '../features-section/features-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, AboutSectionComponent, FeaturesSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
