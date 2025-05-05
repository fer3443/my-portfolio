export type LocaleMessages = {
  sendEmails: {
    success: {
      message: string;
      message2: string;
    };
    error: {
      message1: string;
      message2: string;
      message3: string;
    };
  };
};

export type SendEmailResponse = {
  ok:boolean;
  message:string;
  message2:string;
}