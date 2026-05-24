import { ENV, DELETE_DATA_MESSAGE, INVALID_ID } from "../../../constant/index.js";
import { deleteByID } from "../db/index.js";

const deleteController = async (req, res) => {
    try {
        // console.log(req.params, "===> params")
        const { id } = req.params;
        await deleteByID(id)
        return res.status(200).json({ status: true, message: DELETE_DATA_MESSAGE })
    } catch (error) {
        return res.status(400).json({ status: false, message: ENV.INVALID_ID })
    }
}

export default deleteController