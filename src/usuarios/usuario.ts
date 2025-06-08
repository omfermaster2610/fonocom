export interface ProgresoModulo {
  [actividad: string]: number;
}

export interface Progreso {
  comunicacion: Record<string, number>;
  empleo: Record<string, number>;
  ideas: Record<string, number>;
}

export interface Usuario {
  id: number;
  username: string;
  password: string;
  progreso: Progreso;
}
