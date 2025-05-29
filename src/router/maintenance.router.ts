import { Express } from "express";
import {
  createMaintenanceController,
  getAllMaintenanceController,
  getMaintenanceByIdController,
  updateMaintenanceController,
  deleteMaintenanceController
} from "../controllers/maintenance.controller";

const maintenanceRoutes = (app: Express) => {
  app.route("/maintenance")
    .post(createMaintenanceController)
    .get(getAllMaintenanceController);

  app.route("/maintenance/:id")
    .get(getMaintenanceByIdController)
    .put(updateMaintenanceController)
    .delete(deleteMaintenanceController);
};

export default maintenanceRoutes;
