import { Component, OnInit } from '@angular/core';
import { RegistationService } from 'src/app/service/registation-service/registation.service';
import { RegistationDto } from 'src/app/dto/registation-dto';
import { error } from 'util';

@Component({
  selector: 'app-registationn',
  templateUrl: './registationn.component.html',
  styleUrls: ['./registationn.component.css']
})
export class RegistationnComponent implements OnInit {

  cPassword:String;

  passwordMatch:boolean=false;

  registationDto:RegistationDto=new RegistationDto();

  constructor(private registationService:RegistationService) { }

  ngOnInit() {
  }

  save(){
    console.log(this.registationDto.userName)
    console.log(this.registationDto.pasword)
    if(this.registationDto.pasword === this.cPassword){
      this.registationService.registation(this.registationDto).subscribe(
        response=>{
          if(response){
            alert("Sucess registation")
            this.passwordMatch=false;
          }
        },
        error=>{
          alert("Failed registation")
        }
      )
      
    }else{
      this.passwordMatch=true;
    }
  }
}
