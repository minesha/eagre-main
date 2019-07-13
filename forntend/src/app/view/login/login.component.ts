import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logindto } from 'src/app/dto/logindto';
import { LoginService } from 'src/app/service/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:String;
logingdto: Logindto = new Logindto();


  constructor(private route:Router,private loginService: LoginService) { }

  ngOnInit() {
  }


  login(){
    this.loginService.login(this.logingdto).subscribe(
      response=>{
        console.log(response)
        if(response){
          this.route.navigate(['/home/dashboard'])
        }
      },
      error=>{
        alert("Failed login")
      }
    
    )
    


  }
}
