import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario.model';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  usuario: Usuario = null;
  constructor(public usuarioServie: UsuarioService, private tokenService: TokenService) {}
  isLogged = false;
  ngOnInit(): void {
    this.cargarUsuario();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarUsuario() {
    this.usuarioServie.detail(2).subscribe(data => {
      this.usuario = data;
    });
  }
}