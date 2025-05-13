import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent {
  formGroup: FormGroup;
  isConfirmed = false;
  formData: any = {};

  assetTypes = ['Stocks', 'Bonds', 'Real Estate', 'Commodities'];

  constructor(private fb: FormBuilder) {
    // Initialize the reactive form
    this.formGroup = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      purchasePrice: [0, [Validators.required, Validators.min(0)]],
      purchaseDate: ['', Validators.required],
    });
  }

  // Form submission
  onSubmit() {
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      this.formData = this.formGroup.value;
      this.isConfirmed = true; // Toggle to confirmation page
    } else {
      alert('Please fill out all required fields');
    }
  }

  // Toggle back to the form for editing
  onEdit() {
    this.isConfirmed = false;
    this.formGroup.reset();
  }

  // Submit the form (you can add backend logic here)
  onConfirmSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Form Submitted Successfully');
    this.formGroup.reset();
    this.isConfirmed = false;
  } 
}
