import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Order } from "@/models/Order";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, phone, email, address, requirement, deliveryDate } = body;

    if (!name || !phone || !email || !address || !requirement || !deliveryDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const order = await Order.create({
      name,
      phone,
      email,
      address,
      requirement,
      deliveryDate,
      status: "unopened",
    });

    return NextResponse.json(
      { message: "Order submitted successfully", orderId: order._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Failed to submit order. Please try again." },
      { status: 500 }
    );
  }
}
