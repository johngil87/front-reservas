export class Departamento {
  status: number;
  succsess: boolean;
  message: string[];
  data: Data;
}

class Data{
  filas: number;
  deptos: Deptos[];
}

class Deptos{
   idDepto: number;
   nomDepto: string;
}
