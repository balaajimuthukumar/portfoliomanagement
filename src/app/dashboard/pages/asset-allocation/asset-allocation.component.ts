import { Component, OnInit } from '@angular/core';
import { AssetAllocationService } from '../../services/assetallocation.service';
import { assetAllocationData, assetAllocationOptions, assetComparisonData, assetComparisonOptions } from '../../models/dashboard.model';

@Component({
  selector: 'app-asset-allocation',
  templateUrl: './asset-allocation.component.html'
})
export class AssetAllocationComponent implements OnInit {
  public assetAllocationData: any = assetAllocationData;
  public assetComparisonData = assetComparisonData;
  public assetAllocationOptions = assetAllocationOptions;
  public assetComparisonOptions = assetComparisonOptions;

  constructor(private assetService: AssetAllocationService) {}

  ngOnInit(): void {
    this.loadAssetAllocationData();
    this.loadAssetComparisonData();  }

  loadAssetAllocationData(): void {
    this.assetService.getAssetAllocationData().subscribe(
      (response:any) => {
        this.assetAllocationData = Object.assign({}, response);
      },
      (error:any) => {
      }
    );
  }

  loadAssetComparisonData(): void {
    this.assetService.getAssetComparisonData().subscribe(
      (response) => {
        this.assetComparisonData = Object.assign({}, response);
      },
      (error) => {
      }
    );
  }  
}
