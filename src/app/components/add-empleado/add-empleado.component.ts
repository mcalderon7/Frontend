import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado.model';
import { Vacuna } from 'src/app/models/vacuna.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { VacunaService } from 'src/app/services/vacuna.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  id_vacuna: number = 0;
  empleado: Empleado = {
    nombre: '',
    puesto: '',
    ref_vacuna: undefined,
    fecha_primera_dosis: '',
    estado_primera_dosis: false,
    fecha_segunda_dosis: '',
    estado_segunda_dosis: false
  };
  dataVacunas: Vacuna[] = [];
  submitted = false;
  
  constructor(private empleadoService: EmpleadoService, private vacunaService: VacunaService) { }
  
  ngOnInit(): void {
    this.getDataVacunas();
  }

  getDataVacunas(): void {
    this.vacunaService.getAll().subscribe(data => {
      if(data) {
        this.dataVacunas = data;
      }
    });
  }

  saveTutorial(): void {
    if (this.id_vacuna != 0) {
      this.empleado.ref_vacuna = { id_vacuna : this.id_vacuna }
    }
    this.empleadoService.create(this.empleado)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
