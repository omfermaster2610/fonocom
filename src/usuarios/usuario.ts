export interface ProgresoModulo {
  [actividad: string]: number;
}

export interface Progreso {
  comunicacion: ProgresoModulo;
  empleo: ProgresoModulo;
  ideas: ProgresoModulo;
}

export interface Usuario {
  id: number;
  username: string;
  password: string;
  progreso: Progreso;
}
