import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  credentials = {
    
    email:'',
    password :'',
    repeatPassword:''

  }



  constructor() { }

  ngOnInit(): void {
  }
  visible:boolean = true;
  changetype:boolean =true;
  greyColor = "#808080"; //color value for dynamically changing color of icon and para
  regex: RegExp = /\d+/g;  //regex for checking if a string contains a number

  doesHaveNumber(){             //function for checking if string contains a number

    if (this.credentials.password.match(this.regex)) {
      //console.log('The string contains a number.');
      return true;

    } else{
      return false;
    }

  }




  
  

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onSubmit(){     //form submit button

    if(this.credentials.email != '' && this.credentials.password != '' &&
      this.credentials.email != null && this.credentials.password != null
       && this.credentials.repeatPassword != '' &&
        this.credentials.repeatPassword != null && this.credentials.password == this.credentials.repeatPassword){
      console.log("Form is submitted");            //can make changes as necessary. this is basic form validation.
      //window.location.href = '/login';
      
    } else if(this.credentials.password != this.credentials.repeatPassword) {
                 
      console.log("password do not match")

      } 
    
    
    else{
      console.log("Values are Empty");
    }

  }

}
