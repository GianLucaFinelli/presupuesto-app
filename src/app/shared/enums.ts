export const imagesMarcas = {
    fiat: "./assets/images/fiatVector.png",
    peugeot: "./assets/images/peugeotVector.png",
    peugeottwo: "./assets/images/peugeot-vector-two.png",
    volkswagen: "./assets/images/volkswagenVector.png",
    default: './assets/images/defaultVector.png'
}

export const marcas: any = {
    Fiat:{
        img: "./assets/images/fiatVector.png",
        nombre: "Fiat"
    },
    Peugeot:{
        img: "./assets/images/peugeotVectorTwo.png",
        nombre: "Peugeot"
    },
    Volkswagen:{
        img: "./assets/images/volkswagenVector.png",
        nombre: "Volkswagen"
    },
    Default:{
        img: "./assets/images/defaultVector.png",
        nombre: "Default"
    },
}

export const cuotas: any = {
    3: {
        value: 3,
        interes: 3
    },
    6: {
        value:6,
        interes: 7
    },
    9: {
        value: 9,
        interes: 12
    },
    12: {
        value: 12,
        interes: 18
    },
    default: {
        value: "Default",
        interes: 0
    },
}


// -----------------

export const marcasOptions: any = [
    {
      selected: "selected",
      value:  marcas["Default"]["nombre"],
      label: "-- Seleccionar --",
      precio: "0"
    },
    {
      selected: '',
      value: marcas["Fiat"]["nombre"],
      label: marcas["Fiat"]["nombre"],
      precio: "145600"
    },
    {
      selected: '',
      value: marcas["Peugeot"]["nombre"],
      label: marcas["Peugeot"]["nombre"],
      precio: "459080"
    },
    {
      selected: '',
      value: marcas["Volkswagen"]["nombre"],
      label: marcas["Volkswagen"]["nombre"],
      precio: "362000"
    },
  ];

  export const paqueteList: any[] = [
    {
      selected: true,
      value: "Default",
      label: "-- Seleccionar --"
    },
    {
      selected: false,
      value: "Full",
      label:"Full"
    } ,
    {
      selected: false,
      value: "Base",
      label: "Base"
    }
  ];

  export const cuotasOptions: any = [
    {
      selected: true,
      value: cuotas["default"]["value"],
      label: "-- Seleccionar --",
    },
    {
      selected: false,
      value: cuotas["3"]["value"],
      label: cuotas["3"]["value"],
    },
    {
      selected: false,
      value: cuotas["6"]["value"],
      label: cuotas["6"]["value"],
    },
    {
      selected: false,
      value: cuotas["9"]["value"],
      label: cuotas["9"]["value"],
    },
    {
      selected: false,
      value: cuotas["12"]["value"],
      label: cuotas["12"]["value"],
    }
  ];