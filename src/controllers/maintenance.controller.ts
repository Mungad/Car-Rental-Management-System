import { Request, Response } from "express";
import {
  createMaintenanceService,
  getAllMaintenanceService,
  getMaintenanceByIdService,
  updateMaintenanceService,
  deleteMaintenanceService
} from "../services/maintenance.service";

export const createMaintenanceController = async (req: Request, res: Response) => {
  try {
    const maintenance = req.body;
    const newRecord = await createMaintenanceService(maintenance);
    return res.status(201).json({ message: "Maintenance record created", data: newRecord });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllMaintenanceController = async (_: Request, res: Response) => {
  try {
    const records = await getAllMaintenanceService();
    return res.status(200).json({ data: records });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getMaintenanceByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const record = await getMaintenanceByIdService(id);
    if (!record) return res.status(404).json({ message: "Maintenance not found" });
    return res.status(200).json({ data: record });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateMaintenanceController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const updated = await updateMaintenanceService(id, data);
    return res.status(200).json({ message: "Maintenance updated", data: updated });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteMaintenanceController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteMaintenanceService(id);
    return res.status(204).send();
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
