import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(name: string) {
    const dialogRef = this.dialog.open(ImageDialog, {
      data: { name: name },
    });
  }
}


@Component({
  selector: 'img-dialog',
  templateUrl: './img.dialog.component.html',
})
export class ImageDialog {

  imgUrl: string = './assets/imgs/';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {
    this.imgUrl += data.name;
  }
}
