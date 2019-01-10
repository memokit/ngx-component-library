import {
  Component,
  ViewEncapsulation,
  OnInit,
} from "@angular/core";

@Component({
  selector: ".content-inner-wrapper",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})

//https://innostudio.de/fileuploader/#examples
export class UploadComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
