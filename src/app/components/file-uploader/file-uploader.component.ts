import { Component } from '@angular/core';
import * as LR from "@uploadcare/blocks";
LR.registerBlocks(LR);

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

}
