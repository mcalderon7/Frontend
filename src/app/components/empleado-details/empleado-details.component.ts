import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { Vacuna } from 'src/app/models/vacuna.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { VacunaService } from 'src/app/services/vacuna.service';

@Component({
  selector: 'app-empleado-details',
  templateUrl: './empleado-details.component.html',
  styleUrls: ['./empleado-details.component.css']
})

export class EmpleadoDetailsComponent implements OnInit {

  id_vacuna:number = 0;
  submitted:boolean = false;
  dataVacunas: Vacuna[] = [];
  empleadoActual:Empleado = new Empleado;

  constructor(private empleadoService:EmpleadoService, private vacunaService:VacunaService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.getDataVacunas();
    this.getEmpleado(this.route.snapshot.params["id"]);
  }
  
  getDataVacunas(): void {
    this.vacunaService.getAll().subscribe(data => {
      if(data) {
        this.dataVacunas = data;
      }
    });
  }

  getEmpleado(id: string): void {
    this.empleadoService.get(id)
      .subscribe({
        next: (data) => {
          this.empleadoActual = data;
          this.id_vacuna = this.empleadoActual.ref_vacuna?.id_vacuna;
        },
        error: (e) => console.error(e)
      });
  }

  updateEmpleado(): void {
    if (this.id_vacuna != 0) {
      this.empleadoActual.ref_vacuna = { id_vacuna: this.id_vacuna }
    }
    // console.log(this.empleadoActual);
    this.empleadoService.update(this.empleadoActual.id_empleado, this.empleadoActual)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
