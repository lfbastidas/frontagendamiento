import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../auth/pages/sign-in/sign-in.component';



const routes: Routes=[
    {path:'',
    children:[
        {
            path:'sign-in',
            component:SigninComponent,
            data:{tittle:"sign-in"}
        }
    ]}
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AuthroutingModule { }
