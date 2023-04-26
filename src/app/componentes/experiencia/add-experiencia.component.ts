import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  nombreEmpresa: string = '';
  descripcion: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreEmpresa, this.descripcion);
    this.sExperiencia.save(exp).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        console.log(err);
        
        this.router.navigate(['']);
      }
    )
  }
}
