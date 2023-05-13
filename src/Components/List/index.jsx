import React from "react";
import { Box, Btn } from "../UI/Index";
import { lista } from "../../info";
import Card from "../Card";




 const List = () => {
    return <Box>
        {
            lista.cargos.map((cargo, i) => {
                return <Card key={i} cargo={cargo}>
                    

                </Card>


            })
            
        }
        <Btn>Ver Mas</Btn>
    </Box>
 }

 export default List;