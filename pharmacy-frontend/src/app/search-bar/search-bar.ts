import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBarComponent {
  searchTerm: string = '';

  onSearch(): void {
    // A simple alert to demonstrate data binding.
    // In a real app, this would trigger a search service.
    alert(`You searched for: ${this.searchTerm}`);
  }
}
