export class Usuario{
    id?: Number;
    nombre: String;
    apellido: string;
    cargoActual: string;
    photoUrl: string;
    bannerUrl: string;
    descripcion: string;
    constructor(nombre: string, apellido: string, cargoActual: string, photoUrl: string, bannerUrl: string, descripcion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargoActual = cargoActual;
        this.photoUrl = photoUrl;
        this.bannerUrl = bannerUrl;
        this.descripcion = descripcion;
    }
}