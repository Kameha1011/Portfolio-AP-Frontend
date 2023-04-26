import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion-service';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit{
  nombreInstitucion: string = '';
  titulo: string = '';

  constructor(private educacionService: EducacionService,private router: Router) { }
  ngOnInit(): void {
    
  }
  onCreate(): void {
    const edu = new Educacion(this.nombreInstitucion, this.titulo);
    this.educacionService.save(edu).subscribe(
      data => {
        alert("Educacion agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        console.log(err);
        
        this.router.navigate(['']);
      }
    )
  }
}
