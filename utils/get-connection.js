import mongoose from "mongoose"
const getConnection = async(uri_remota)=>{
    try {
        await mongoose.connect(uri_remota)
        console.log('Conexión Ok')
    } catch (error) {
        console.log('getConnection', error)
    }
}
export default getConnection