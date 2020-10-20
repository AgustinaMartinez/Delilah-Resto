import Neighborhood from '../models/neighborhoods.model';

export const getNeighborhoods = async (req, res) => {
    const neighborhoods = await Neighborhood.find();
    res.status(200).json(neighborhoods);
}

export const createNeighborhood = async (req, res) => {
    const {name} = req.body;
    const newNeighborhood = new Neighborhood({name});
    const savedNeighborhood = await newNeighborhood.save();
    res.status(201).json(savedNeighborhood);
}

export const getNeighborhoodByID = async (req, res) => {
    const neighborhood = await Neighborhood.findById(req.params.id);
    res.status(200).json(neighborhood);
}

export const updateNeighborhoodByID = async (req, res) => {
    const updatedNeighborhood = await Neighborhood.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedNeighborhood);
}

export const deleteNeighborhoodByID = async (req, res) => {
    await Neighborhood.findByIdAndDelete(req.params.id);
    res.status(200).send("The neighborhood was deleted successfully.");
}
