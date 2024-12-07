import { Component, OnInit } from '@angular/core';
import { Services } from '../../models/services';
import { ServicesService } from '../../services/services.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  services: Services[] = [];
  constructor(private service: ServicesService, private router: Router) { }
  ngOnInit(): void {
    this.service.getServices().subscribe(data => {
      this.services = data;
    },
    );
  }
  viewDetails(serviceId: number): void {
    this.router.navigate(['/details', serviceId]);
    
  }
}