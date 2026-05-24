import { ENV } from "../../../constant/index.js";
import { transectionModel } from "../models/index.js";

const getAllUsers = async (condition) => await transectionModel.find(condition);
const addData = async (data, res) => {
    try {
        await transectionModel.create(data);
        return true
    } catch (error) {
        res.status(400).send({ status: false, message: error.message })
        return false
    }
}
const deleteByID = async (id) => await transectionModel.findByIdAndDelete(id);
const updateByID = async (id, data) => await transectionModel.findByIdAndUpdate(id, data);

export {
    getAllUsers,
    addData,
    deleteByID,
    updateByID
}