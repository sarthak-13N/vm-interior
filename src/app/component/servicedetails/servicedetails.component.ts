import { Component, OnInit } from '@angular/core';
import { Services } from '../../models/services';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-servicedetails',
  templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.css'
})
export class ServicedetailsComponent implements OnInit{

  service: Services | undefined;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServicesService
  ) {}

  ngOnInit(): void {
    const serviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceService.getServicesById(serviceId).subscribe(data => {
      this.service = data;
     // .find(item => item.id === serviceId);
    });
  }

}
