import { addData } from "../db/index.js";
import { ENV, POST_DATA_MESSAGE } from "../../../constant/index.js";

const postController = async (req, res) => {
    try {
        const data = await addData(req.body, res)
        // console.log(req.body, "==> userData")
        if (data) {
            return res.status(200).send({ status: true, message: POST_DATA_MESSAGE });
        }
    } catch (error) {
        res.status(400).send({ status: false, message: error.message })
    }
}

export default postController