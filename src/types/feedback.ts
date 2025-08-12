import { Prisma } from "@prisma/client";

export type Feedback = Prisma.FeedbackGetPayload<{
  include: {
    user: {
      select: {
        id: true;
        name: true;
        email: true;
        username: true;
        image: true;
      };
    };
  };
}>;
