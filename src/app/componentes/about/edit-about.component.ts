import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  usuario: Usuario = null;
  constructor(private usuarioService: UsuarioService, private activateRouter: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.usuarioService.detail(id).subscribe(
      (data) => {
        this.usuario = data;
      },
      (err) => {
        alert('Error al cargar Usuario');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id'];
    this.usuarioService.update(id, this.usuario).subscribe(
      (data) => {
        this.router.navigate(['']);
      }, (err) => {
        alert('Error al modificar Usuario');
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event:any){
    
  }
}
