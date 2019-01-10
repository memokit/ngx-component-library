import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UploadComponent } from "./upload.component";
import { NgxUploadKitModule } from 'ngx-upload-kit';

const ROUTE = [
  { path: "", component: UploadComponent }
];

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    NgxUploadKitModule,
    RouterModule.forChild(ROUTE)
  ]
})
export class UploadModule {}
