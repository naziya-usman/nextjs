import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default UserSchema;
