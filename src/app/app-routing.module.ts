import { NgModule } from '@angular/core';
import {RouterModule, Routes} from  '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';



const routes:Routes =[

   //path '/dashboard' pagesRouting
   //path '/auth' authRouting
   //path '/medicos' medicosRouting (no existen son de ejemplo)
   //path '/compras' comprasRouting (no existen son de ejemplo)
  {path:'**',component:NopagefoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
