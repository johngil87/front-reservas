export class Areas {
  statusCode: number;
  success: boolean;
  messages: string[];
  data: Data;
}

class Data{
  filas: number;
  area: Area[];
}

class Area{
  idArea: number;
  nomArea: string;
  idSucursal: number;
}
