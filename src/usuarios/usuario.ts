export interface Progreso {
  comunicacion: number;
  empleo: number;
  ideas: number;
}

export interface Usuario {
  id: number
  username: string
  password?: string
  progreso: Progreso
}
