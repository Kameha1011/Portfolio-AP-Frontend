import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AddExperienciaComponent } from './componentes/experiencia/add-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { AddEducacionComponent } from './componentes/education/add-educacion.component';
import { EditEducacionComponent } from './componentes/education/edit-educacion.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { EditAboutComponent } from './componentes/about/edit-about.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: AddExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaeducacion', component: AddEducacionComponent},
  {path:'editeduc/:id', component: EditEducacionComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editusuario/:id', component: EditAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
