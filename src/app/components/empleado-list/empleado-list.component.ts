import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  listaEmpleados: Empleado[] = [];
  
  constructor(private empleadoService: EmpleadoService, private router: Router) {}
  
  ngOnInit() : void {
    this.empleadoService.getAll().subscribe(data => {
      if(data) {
        this.listaEmpleados = data;
        console.log(this.listaEmpleados);
      } else {
        console.error("No hay datos de empleados.");
      }
    });
  }

  deleteEmpleado(id_empleado:number): void {
    this.empleadoService.delete(id_empleado)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/empleado']);
        },
        error: (e) => console.error(e)
      });
  }

}
