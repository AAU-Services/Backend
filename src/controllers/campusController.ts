import Campus from "../models/Campus";
import { Request, Response } from "express";

export const getCampuses = async (req: Request, res: Response) => {
  try {
    const campuses = await Campus.find();
    res.status(200).json(campuses);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const getCampus = async (req: Request, res: Response) => {
  try {
    const campus = await Campus.findById(req.params.id);
    res.status(200).json(campus);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};

export const createCampus = async (req: Request, res: Response) => {
  const campus = req.body;
  const newCampus = new Campus(campus);
  try {
    await newCampus.save();
    res.status(201).json(newCampus);
  } catch (error) {
    res.status(409).json({ message: (error as Error).message });
  }
};

export const updateCampus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const campus = req.body;
  if (!Campus.findById(id)) {
    return res.status(404).json({ message: "Campus not found" });
  }
  const updatedCampus = await Campus.findByIdAndUpdate(id, campus, {
    new: true,
  });
  res.json(updatedCampus);
};

export const deleteCampus = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!Campus.findById(id)) {
    return res.status(404).json({ message: "Campus not found" });
  }
  await Campus.findByIdAndRemove(id);
  res.json({ message: "Campus deleted successfully" });
};
