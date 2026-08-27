import mongoose, { Schema, Document, Model } from "mongoose";

export type OrderStatus =
  | "unopened"
  | "contacted"
  | "confirmed"
  | "work_in_progress"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface IOrder extends Document {
  name: string;
  phone: string;
  email: string;
  address: string;
  requirement: string;
  deliveryDate: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    address: { type: String, required: true, trim: true },
    requirement: { type: String, required: true },
    deliveryDate: { type: String, required: true },
    status: {
      type: String,
      enum: [
        "unopened",
        "contacted",
        "confirmed",
        "work_in_progress",
        "shipped",
        "delivered",
        "cancelled",
      ],
      default: "unopened",
    },
  },
  { timestamps: true }
);

export const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
