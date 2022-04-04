import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpleadoComponent } from './components/add-empleado/add-empleado.component';
import { EmpleadoDetailsComponent } from './components/empleado-details/empleado-details.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    EmpleadoDetailsComponent,
    EmpleadoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
