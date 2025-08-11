import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrl: './api-data.css'
})
export class ApiData implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => console.error('Error fetching posts', err),
    });
  }
}
