import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion-service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {
  educ: Educacion = null;

  constructor(private educacionService: EducacionService, private activateRouter: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      (data) => {
        this.educ = data;
      },
      (err) => {
        alert('Error al cargar educación');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educ).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar educación');
        this.router.navigate(['']);
      }
    );
  }
}
