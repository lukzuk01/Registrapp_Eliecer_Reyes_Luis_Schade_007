import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registroprofe',
    loadChildren: () => import('./pages/registroprofe/registroprofe.module').then( m => m.RegistroprofePageModule)
  },
  {
    path: 'registroalumno',
    loadChildren: () => import('./pages/registroalumno/registroalumno.module').then( m => m.RegistroalumnoPageModule)
  },
  {
    path: 'generaqr',
    loadChildren: () => import('./pages/generaqr/generaqr.module').then( m => m.GeneraqrPageModule)
  },
  {
    path: 'reciveqr',
    loadChildren: () => import('./pages/reciveqr/reciveqr.module').then( m => m.ReciveqrPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
