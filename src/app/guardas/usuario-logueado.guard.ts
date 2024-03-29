import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../modulos/usuarios/servicios/usuarios.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioLogueadoGuard implements CanActivate {
  constructor(public usuarioSs: UsuariosService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let respuesta: boolean = false;

    if (this.usuarioSs.usuario()) {
      respuesta = true;
    } else {
      return this.router.navigateByUrl('');
    }

    return respuesta;
  }
}
