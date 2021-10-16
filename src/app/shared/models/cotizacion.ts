
export class Cotizacion {
    precioBase!: string;
    cuotas!: string;
    interes!: string;
    marca!: string;
    paquete!: string;

    /**
     *
     */
    constructor(obj: any) {
        this.precioBase = obj.precio;
        this.cuotas = obj.cuotas;
        this.interes = obj.interes;
        this.marca = obj.marca;
        this.paquete = obj.paquete;

    }


  Cuotas(cotizacion: Cotizacion) : number[] {
    var items: number[] = [];
    var coti: Cotizacion = cotizacion;
    for(let i = 0; i < parseInt(coti.cuotas) ; i++ ){
        let precioDividoCuotas = parseInt(coti.precioBase) / parseInt(coti.cuotas);
        let interesAplicado = parseInt(coti.precioBase) * parseInt(coti.interes);
        let valueWithInteres : number = parseInt((precioDividoCuotas + interesAplicado / 100).toFixed(0));
        items.push(valueWithInteres);
    }
    return items;
  }

  // PrecioFinal(): number{
  //   let result: number = 0;
  //   for(let i = 0; i < parseInt(this.cuotas) ; i++ ){
  //     let precioDividoCuotas = parseInt(this.precioBase) / parseInt(this.cuotas);
  //     let interesAplicado = parseInt(this.precioBase) * parseInt(this.interes);
  //     let valueWithInteres : number = parseInt((precioDividoCuotas + interesAplicado / 100).toFixed(0));
  //     result += valueWithInteres;
  //   }
  //   return result;
  // }

  PrecioFinal(): number{
    let result: number =  parseInt(this.precioBase) + ( parseInt(this.precioBase) * parseInt(this.interes) / 100);
    if(this.paquete == "Full"){
      return result + 90000;
    }
    return result;
  }
}