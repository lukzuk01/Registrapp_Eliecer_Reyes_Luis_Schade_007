import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'registroprofe',
    loadChildren: () => import('./pages/registroprofe/registroprofe.module').then( m => m.RegistroprofePageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'registroalumno',
    loadChildren: () => import('./pages/registroalumno/registroalumno.module').then( m => m.RegistroalumnoPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'generaqr',
    loadChildren: () => import('./pages/generaqr/generaqr.module').then( m => m.GeneraqrPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'reciveqr',
    loadChildren: () => import('./pages/reciveqr/reciveqr.module').then( m => m.ReciveqrPageModule),
    //canActivate: [IngresadoGuard]
  },
   {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule),
   // canActivate: [IngresadoGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule),
    //canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    //canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate: [NoIngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
