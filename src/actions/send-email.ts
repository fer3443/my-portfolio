import { FormValues } from "@/types";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY;

export const sendEmail = async (values:FormValues) => {

  try {
    await emailjs.send(
      `${SERVICE_ID}`,
      `${TEMPLATE_ID}`,
      values,
      {
        publicKey: `${PUBLIC_KEY}`,
      },
    );
    return {
      ok:true,
      message:"Su mensaje fue enviado con éxito"
    }
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.log('EMAILJS FAILED...', err);
      return {
        ok:false,
        message: "Hubo un problema al enviar el mensaje!"
      }
    }
  
    console.log('ERROR', err);
    return {
      ok:false,
      message:"Hubo un problema al enviar el mensaje."
    }
  }
}