import { Vacuna } from "./vacuna.model";

export class Empleado {
    id_empleado?: any;
    nombre?: string;
    puesto?: string;
    ref_vacuna?: Vacuna
    fecha_primera_dosis?: string;
    estado_primera_dosis?: boolean;
    fecha_segunda_dosis?: string;
    estado_segunda_dosis?: boolean;
}
