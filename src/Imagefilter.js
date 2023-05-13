import React from "react";
import Alimentacion from"./assets/images/alimentacion.svg";
import Salud from"./assets/images/salud.svg"
import Otros from"./assets/images/otros.svg"
import Transporte from"./assets/images/transporte.svg"
import Utilidades from"./assets/images/utilidades.svg"
import { Icono, IconoTema } from "./Components/UI/Index";

export default (type) => {
const Images = {
        Restaurante: <IconoTema src={Alimentacion} alt="Restaurante"/>,
        Salud: <IconoTema src={Salud} alt="salud"/>,
        Transporte: <IconoTema src={Transporte} alt="trasporte"/>,
        Utilidades: <IconoTema src={Utilidades} alt="utilidades"/>,
        default:  <IconoTema src={Otros} alt="otros"/>
  };
return Images[type] || Images["default"];

}