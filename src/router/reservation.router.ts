import { Express } from "express";
import {
  createReservationController,
  getReservationController,
  getReservationByIdController,
  getReservationsByCustomerIdController,
  updateReservationController,
  deleteReservationController,
} from '../controllers/reservation.controller';
// Authorization middleware imports removed

const reservation = (app: Express) => {
  app.route("/reservation/register").post(
    async (req, res, next) => {
      try {
        await createReservationController(req, res);
      } catch (error: any) {
        next(error);
      }
    }
  );

  app.route("/reservations").get(
    async (req, res, next) => {
      try {
        await getReservationController(req, res);
      } catch (error: any) {
        next(error);
      }
    }
  );

  // customerID must be spelled in exact same way as in controller while being referenced in params
  app.route("/reservations/customer/:customerID").get(
    async (req, res, next) => {
      try {
        await getReservationsByCustomerIdController(req, res);
      } catch (error: any) {
        next(error);
      }
    }
  );

  app.route("/reservation/:id").get(
    async (req, res, next) => {
      try {
        await getReservationByIdController(req, res);
      } catch (error: any) {
        next(error);
      }
    }
  );

  app.route("/reservation/:id").put(
    async (req, res, next) => {
      try {
        await updateReservationController(req, res);
      } catch (error: any) {
        next(error);
      }
    }
  );

  app.route("/reservation/:id").delete(
    async (req, res, next) => {
      try {
        await deleteReservationController(req, res);
      } catch (error: any) {
        next(error);
      }
    }
  );
};

export default reservation;
