export class Educacion {
    id?: number;
    nombreInstitucion: string;
    titulo: string;
    
    constructor(nombreInstitucion: string, titulo: string) {
        this.nombreInstitucion = nombreInstitucion;
        this.titulo = titulo;
    }
}
