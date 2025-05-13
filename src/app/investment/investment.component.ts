import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent {
  formGroup: FormGroup;
  isConfirmed = false;
  formData: any = {};
  responseMessage = ''
  assetTypes = ['Stocks', 'Bonds', 'Real Estate', 'Commodities'];

  constructor(private fb: FormBuilder, private formService: InvestmentService) {
    this.formGroup = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      purchasePrice: [0, [Validators.required, Validators.min(0)]],
      purchaseDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.formData = this.formGroup.value;
      this.isConfirmed = true;
    }
  }

  onEdit() {
    this.isConfirmed = false;
    this.formGroup.reset();
  }

  onConfirmSubmit() {
    this.formService.submitInvestment(this.formData).subscribe({
      next: (response) => {
        this.responseMessage = response.message;
        this.formGroup.reset();
        this.isConfirmed = false;
      },
      error: (error) => {
      }
    });
  }
}
