import { FormValues, SendEmailResponse } from "@/types";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

interface SendEmailProps {
  values: FormValues;
  locale?: "es" | "en";
}

export const sendEmail = async ({
  values,
  locale = "es",
}: SendEmailProps): Promise<SendEmailResponse> => {
  try {
    await emailjs.send(`${SERVICE_ID}`, `${TEMPLATE_ID}`, values, {
      publicKey: `${PUBLIC_KEY}`,
    });
    if (locale !== "es") {
      return {
        ok: true,
        message: "Your message was sent successfully",
        message2: "I will get in touch with you soon",
      };
    }
    return {
      ok: true,
      message: "Su mensaje fue enviado con éxito",
      message2: "Pronto me pondré en contacto contigo",
    };
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log("EMAILJS FAILED...", err.text);
      if (locale !== "es") {
        return {
          ok: true,
          message: "There was a problem sending the message, please try again",
          message2: "Please contact me through other available channels",
        };
      }
      return {
        ok: true,
        message: "Hubo un problema al enviar el mensaje, intente nuevamente",
        message2: "Por favor contacteme a traves de los otros medios",
      };
    }

    console.log("ERROR", err);
    return {
      ok: false,
      message: "Internal server error",
      message2: "Please contact me through other available channels",
    };
  }
};
