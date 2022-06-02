import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashbord1Component } from './pages/dashbord1/dashbord1.component';
import { Dashbord2Component } from './pages/dashbord2/dashbord2.component';
import { Dashbord22Component } from './pages/dashbord22/dashbord22.component';
import { Dashbord3Component } from './pages/dashbord3/dashbord3.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord1', pathMatch: 'full' },
  { path: 'dashbord1', component: Dashbord1Component },
  { path: 'dashbord22', component: Dashbord22Component },
  { path: 'dashbord3', component: Dashbord3Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
