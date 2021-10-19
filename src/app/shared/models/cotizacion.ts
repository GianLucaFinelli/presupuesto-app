
export class Cotizacion {
    id!: number;
    precio!: string;
    precioFinal!: number;
    cuotas!: string;
    interes!: string;
    marca!: string;
    paquete!: string;

    constructor(obj: any) {
        this.id = obj.id;
        this.precio = obj.precio;
        this.precioFinal = obj.precioFinal;
        this.cuotas = obj.cuotas;
        this.interes = obj.interes;
        this.marca = obj.marca;
        this.paquete = obj.paquete;
    }


  Cuotas(cotizacion: Cotizacion) : number[] {
    var items: number[] = [];
    var coti: Cotizacion = cotizacion;
    for(let i = 0; i < parseInt(coti.cuotas) ; i++ ){
        let precioDividoCuotas = parseInt(coti.precio) / parseInt(coti.cuotas);
        let interesAplicado = parseInt(coti.precio) * parseInt(coti.interes);
        let valueWithInteres : number = parseInt((precioDividoCuotas + interesAplicado / 100).toFixed(0));
        items.push(valueWithInteres);
    }
    return items;
  }

  PrecioFinal(): number{
    let result: number =  parseInt(this.precio) + ( parseInt(this.precio) * parseInt(this.interes) / 100);
    if(this.paquete == "Full"){
      return result + 90000;
    }
    return result;
  }
}