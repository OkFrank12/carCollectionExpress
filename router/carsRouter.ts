import express, { Router } from "express";
import {
  createCars,
  deleteCars,
  getCars,
  singleCars,
  updateCars,
} from "../controller/carsControllers";

const router: Router = express.Router();

router.route("/").get(getCars);
router.route("/create").post(createCars);
router.route("/single/:id").get(singleCars);
router.route("/update/:id").patch(updateCars);
router.route("/delete/:id").delete(deleteCars);

export default router;
