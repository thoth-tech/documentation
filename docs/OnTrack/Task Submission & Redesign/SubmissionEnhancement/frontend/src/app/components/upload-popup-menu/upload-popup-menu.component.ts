import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-upload-popup-menu',
  templateUrl: './upload-popup-menu.component.html',
  styleUrls: ['./upload-popup-menu.component.css']
})
export class UploadPopupMenuComponent {

  src: string = 'http://localhost:4000/file'
  constructor(private httpClient: HttpClient){}

  upload(event: any) {
    const file = event.target.files[0];
    console.log(file)

    const formdata = new FormData()
    formdata.append('file',file)

    this.httpClient.post('http://localhost:4000/file', formdata)
    .subscribe((d) => {
      console.log(d);
    },
    (error)=>{console.error(error);
    });
}
}

