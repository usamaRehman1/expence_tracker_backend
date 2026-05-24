import { ENV, GET_DATA_SUCESSFULLY } from "../../../constant/index.js";
import { getAllUsers } from "../db/index.js";

const getController = async (req, res) => {
    try {
        // console.log(req.query, "=> query")
        const data = await getAllUsers(req.query)
        if (req.query && data.length == 0) {
            return res.status(404).send({ status: false, message: "Data Not Found" })
        }
        return res.status(200).send({ status: true, message: GET_DATA_SUCESSFULLY, data })
    } catch (error) {
        return res.status(400).send({ status: false, message: error.message })
    }
}

export default getController