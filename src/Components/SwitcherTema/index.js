import React from "react";

import themeOff from "../../assets/images/themeOff.svg"
import themeOn from "../../assets/images/themeOn.svg"
import { Icono } from "../UI/Index";

export default ( {Tema} ) => {
const claro = <Icono src={themeOn} alt="tema claro"/>;
const oscuro = <Icono src={themeOff} alt="tema oscuro"/>;

return <>{Tema ? oscuro : claro}</>;
};
