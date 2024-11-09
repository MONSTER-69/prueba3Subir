// importacion a la base de daro
import db from "../database/db.js";
// importar sequelize
import { DataTypes } from "sequelize";

const blogModel= db.define('registro',{
    no_registro: { type: DataTypes.INTEGER, primaryKey: true},
    nombre: { type: DataTypes.STRING},
    edad: { type: DataTypes.DATE},
    numero_telefono: { type: DataTypes.INTEGER}, 
    fecha_registro: { type: DataTypes.DATE},
},
{
    tableName:"registro"
}
)

export default blogModel;







