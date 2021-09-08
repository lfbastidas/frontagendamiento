import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, Router } from '@angular/router';

import { FullComponent } from "./layout/full/full.component"
import { ContentComponent } from "./layout/content/content.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routing";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routing";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  { path: '', component: FullComponent, data: { title: 'full Views' }, children: Full_ROUTES },
  { path: '', component: ContentComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
  { path: '**', redirectTo: 'auth/sign-in' }
];

// const routesExample: Router = [
//   {
//     path: 'auth',
//     loadChildren: () => import('./auth/auth.module').then(m=> m.AuthModule)
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


