import { Request, Response } from "express";
import crypto from "crypto";
import { iCars } from "../utils/interface";

let carDB: iCars[] = [];

export const getCars = (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Fleet of cars view",
      data: carDB,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Cars Not found",
      data: error,
    });
  }
};

export const createCars = (req: Request, res: Response) => {
  try {
    const { brand, color, price } = req.body;

    const ID = crypto.randomUUID();
    const newCars = {
      id: ID,
      brand,
      color,
      price,
    };
    carDB.push(newCars);

    return res.status(201).json({
      message: "Cars fleets successfully",
      data: newCars,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Cars fleets unsuccessfully created",
    });
  }
};

export const singleCars = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const singleCars = carDB.filter((el: iCars) => {
      return el?.id === id;
    });

    return res.status(200).json({
      message: "Single Car fleets successfully",
      data: singleCars,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Cars fleets unsuccessful",
    });
  }
};

export const updateCars = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { brand, color } = req.body;

    const realCar = parseInt(id) - 1;

    carDB[realCar].brand = brand;
    carDB[realCar].color = color;

    return res.status(201).json({
      message: "Cars fleets updated",
      data: carDB,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Cars fleets update unsuccessful",
    });
  }
};

export const deleteCars = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const removeCar = carDB.filter((el: iCars) => {
      return el?.id !== id;
    });

    return res.status(201).json({
      message: "Cars fleets deleted successfully",
      data: removeCar,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Cars fleets delete unsuccessful",
    });
  }
};
