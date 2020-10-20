import Status from '../models/status.model';

export const getStatus = async (req, res) => {
    const status = await Status.find();
    res.status(200).json(status);
}