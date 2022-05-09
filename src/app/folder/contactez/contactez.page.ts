import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactez',
  templateUrl: './contactez.page.html',
  styleUrls: ['./contactez.page.scss'],
})
export class ContactezPage implements OnInit {
  api='https://app.ideal-info.net/send_mail.php?' 

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
logForm(event){
  console.log(event.target.nom.value)
  
      this.http.get(this.api+'nom='+event.target.nom.value
      +'email='+event.target.email.value
      +'message='+event.target.message.value
      ).subscribe((response: any) => {
      console.log(response)
    })
  }
}
