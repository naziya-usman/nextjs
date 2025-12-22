import { z } from "zod";

const UserSchema = z.object({
  name : z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export default UserSchema;
