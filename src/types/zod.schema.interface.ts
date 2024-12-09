import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "El nombre debe llevar al menos 2 caracteres").max(30, "Demasiado extenso, el maximo son 30 caracteres"),
  lastName: z.string().min(2, "El apellido debe llevar al menos 2 caracteres").max(30, "Demasiado extenso, el maximo son 30 caracteres"),
  userEmail: z.string().email({message:"El email es obligatorio"}),
  phone: z.string().min(10, "El teléfono debe tener al menos 10 digitos").max(20,"El teléfono debe tener como maximo 20 digitos"),
  typeService: z.enum(["developer", "design"]).default("developer"),
  message: z.string().min(5, "El mensaje es demasiado corto escribe un poco más").max(250),
});