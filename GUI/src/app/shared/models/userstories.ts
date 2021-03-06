import {Project} from "./project";

export interface Userstories {
    _id?: string;
    titulo?: string;
    solicitante?: string;
    descripcion?: string;
    proyecto?: Project;
    estado?: boolean;

}

export class Userstories implements Userstories {
    constructor(titulo?: string,
                solicitante?: string,
                descripcion?: string,
                proyecto?: Project,
                _id?: string,
                estado?: boolean
    ) {
        if (typeof _id === 'string') {
            this._id = _id;
        }

        if (titulo != null) {
            this.titulo = titulo;
        }

        if (solicitante != null) {
            this.solicitante = solicitante;
        }

        if (descripcion != null) {
            this.descripcion = descripcion;
        }

        if (proyecto != null) {
            this.proyecto = proyecto;
        }

        if (estado != null) {
            this.estado = estado;
        }

    }
}
