import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);
    this.route.params.subscribe((param) => {
      this.propertyId = +param['id'];
    });
  }
  onSelectNext() {
    this.propertyId = this.propertyId == undefined ? +0 : this.propertyId;
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
  }
}
