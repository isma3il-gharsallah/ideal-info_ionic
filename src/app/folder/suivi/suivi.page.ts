import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.page.html',
  styleUrls: ['./suivi.page.scss'],
})
export class SuiviPage implements OnInit {
api='https://app.ideal-info.net/Get_News.php?serial=' 
session_token
@Input() formGroup?: FormGroup 
todo = {}
submit=false
  name: any;
  comments: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
 
  }

  async SubmitForm(e){
    this.submit=true
    console.log(e.target.id_device.value)
/*   
    var url=this.api+'/initSession';

  
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'user_token 1bsmJl4f2xOMMytGhNPRfGr0qc9XKDhyjbpK6I3r');
    
     this.http.get(url,{headers}).subscribe((response: any) => {
     
      this.session_token=response['session_token']
      headers = headers.append('Session-Token',this.session_token );
    
      var url=this.api+'/Computer'+'/'+e.target.id_device.value;
      */
      this.http.get(this.api+e.target.id_device.value).subscribe((response: any) => {
      console.log(response)
      this.name=response['name']
      this.comments=response['content']

    })



  }

}
