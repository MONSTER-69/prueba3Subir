import { Sequelize } from "sequelize";


const db= new Sequelize("hospital",'root','Best4ever2018',{
    host:'localhost',
    dialect:'mysql'
})

export default db