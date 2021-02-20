import { Usuario } from '../shared/interfaces/usuario.interface';

export interface LoginResponse {
    user: Usuario;
    token: string;
}