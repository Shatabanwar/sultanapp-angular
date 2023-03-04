import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password :''
  }

  constructor(private router:Router) { }

  ngOnInit(): void {

      // @ts-ignore
  google.accounts.id.initialize({
    client_id: "998494803639-hlapf71ffqqp0hm2cikqaicjlhmarsc5.apps.googleusercontent.com",
    callback: this.handleCredentialResponse.bind(this),
    auto_select: false,
    cancel_on_tap_outside: true,

  });
  // @ts-ignore
  google.accounts.id.renderButton(
  // @ts-ignore
  document.getElementById("google-button"),
    { theme: "outline", size: "large", width: "100%" }
  );
  // @ts-ignore
  google.accounts.id.prompt((notification: PromptMomentNotification) => {});
  }

  visible:boolean = true;
  changetype:boolean =true;

  async handleCredentialResponse(response: any) {
    // Here will be your response from Google.
    console.log(response);
  }
  

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onSubmit(){
    
    if(this.credentials.email != '' && this.credentials.password != '' && this.credentials.email != null && this.credentials.password != null){
      console.log("Form is submitted");
    
      
    } else{
      console.log("Values are Empty");
    }
  }




  // showPassword(){
  //   const showPassword = document.querySelector("#show-password");
  //   const passwordValue = document.querySelector("#password");

  //   showPassword?.addEventListener("click",() =>{
  //     showPassword.classList.toggle("bi bi-eye-slash");
  //     const type = passwordValue?.getAttribute("type") === "password" ? "text" : "password";
  //     passwordValue?.setAttribute("type",type);
       
  //   });
  // }

}
