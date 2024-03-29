import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onBack() {
    debugger;
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm) {
    console.log('Hurrah!');
    console.log(Form);
  }
}
