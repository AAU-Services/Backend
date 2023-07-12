import { Request, Response } from "express";
import Building from "../models/Building";

export const getBuildings = async (req: Request, res: Response) => {
  try {
    const buildings = await Building.find();
    res.status(200).json(buildings);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const getBuilding = async (req: Request, res: Response) => {
  try {
    const building = await Building.findById(req.params.id);
    res.status(200).json(building);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const createBuilding = async (req: Request, res: Response) => {
  const building = req.body;
  const newBuilding = new Building(building);
  try {
    await newBuilding.save();
    res.status(201).json(newBuilding);
  } catch (error) {
    res.status(409).json({ message: (error as Error).message });
  }
};

export const updateBuilding = async (req: Request, res: Response) => {
  const { id } = req.params;
  const building = req.body;
  if (!Building.findById(id)) {
    return res.status(404).json({ message: "Building not found" });
  }
  const updatedBuilding = await Building.findByIdAndUpdate(id, building, {
    new: true,
  });
  res.json(updatedBuilding);
};

export const deleteBuilding = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Building.findById(id)) {
    return res.status(404).json({ message: "Building not found" });
  }
  await Building.findByIdAndRemove(id);
  res.json({ message: "Building deleted successfully" });
};
