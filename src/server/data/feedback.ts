"use server";

import { cache } from "react";
import { prisma } from "../prisma";

export const getAllTestimonials = cache(async () => {
  try {
    const res = await prisma.feedback.findMany({
      where: { type: "TESTIMONIAL" },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            username: true,
            image: true,
          },
        },
      },
      orderBy: { rating: "desc" },
    });
    return res;
  } catch (error) {
    console.log("Error fetching testimonials: ", error);
  }
});
