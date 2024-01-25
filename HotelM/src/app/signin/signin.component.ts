import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  signInForm! : FormGroup;
  journey : any;
  data : any;
  validUser : any;
  notValidUser : boolean = false;


  constructor(private formBuilder:FormBuilder, 
    private apicallService: ApicallService, private router:Router){

  }

  ngOnInit(){
    this.journey = this.apicallService.journey;
    this.getData()
    this.formDetails()

    }
    formDetails(){

      this.signInForm = this.formBuilder.group({
        userName:['',[Validators.required]],
        password:[]
      })

    }
    submit(){
      this.validUser =[]
      this.data.find((ele:any)=>{
        if(this.signInForm.value.userName == ele.fullName && this.signInForm.value.password == ele.password){
          this.validUser.push(ele);
        }
        

      })
      if(this.validUser.length > 0){
        if(this.journey == 'admin'){
          this.router.navigateByUrl('/admin/adminSuccess')
        }
        else if(this.journey == 'user'){
          this.router.navigateByUrl('/user/userSuccess') 
         }
         else{
          this.router.navigateByUrl('/owner/ownerSuccess')
         }
      }else{
        this.notValidUser = true;
      }

    }

    getData(){
      this.apicallService.getApiCall(this.journey).subscribe(respo=>{
        this.data = respo;
        console.log('this.data', this.data);

      })
      
      
    }
  }
