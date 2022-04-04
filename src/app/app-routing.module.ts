import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoDetailsComponent } from './components/empleado-details/empleado-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'empleado', pathMatch: 'full' },
  { path: 'empleado', component: EmpleadoListComponent },
  { path: 'empleado/:id', component: EmpleadoDetailsComponent },
  { path: 'add', component: AddEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
