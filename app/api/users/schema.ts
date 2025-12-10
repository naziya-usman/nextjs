import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export default UserSchema;
