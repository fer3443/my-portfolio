import { z } from "zod";

export const getFormSchema = (t?: (key: string) => string) => {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(2, {
        message: t
          ? t("firstName.min")
          : "El nombre debe llevar al menos 2 caracteres",
      })
      .max(30, {
        message: t
          ? t("firstName.max")
          : "Demasiado extenso, el maximo son 30 caracteres",
      }),
    lastName: z
      .string()
      .trim()
      .min(2, {
        message: t
          ? t("lastname.min")
          : "El apellido debe llevar al menos 2 caracteres",
      })
      .max(30, {
        message: t
          ? t("lastname.max")
          : "Demasiado extenso, el maximo son 30 caracteres",
      }),
    userEmail: z
      .string()
      .trim()
      .email({ message: t ? t("email") : "El email es obligatorio" }),
    phone: z
      .string()
      .min(10, {
        message: t
          ? t("phone.min")
          : "El teléfono debe tener al menos 10 digitos",
      })
      .max(20, {
        message: t
          ? t("phone.max")
          : "El teléfono debe tener como maximo 20 digitos",
      }),
    typeService: z.enum(["developer", "design"]).default("developer"),
    message: z
      .string()
      .min(5, {
        message: t
          ? t("message.min")
          : "El mensaje es demasiado corto escribe un poco más",
      })
      .max(250, {
        message: t ? t("message.max") : "El máximo de caracteres es de 250",
      }),
  });
};

export type FormValues = z.infer<Awaited<ReturnType<typeof getFormSchema>>>;
