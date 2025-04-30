"use client";

import {
  Button,
  Input,
  Textarea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { FormValues, getFormSchema } from "@/types";
import { sendEmail } from "@/actions";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";


export const ContactComponent = () => {
  const t =  useTranslations("ContactPage");
  const tr = useTranslations('ContactPage.form.validations')
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(getFormSchema(tr)),
    defaultValues: {
      firstName: "",
      lastName: "",
      userEmail: "",
      phone: "",
      typeService: "developer",
      message: "",
    },
  });

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: t("info.phone"),
      description: "(+54) 381 4168 878",
    },
    {
      icon: <FaEnvelope />,
      title: t("info.email"),
      description: "fer334433@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t("info.address"),
      description: "Tucumán, Argentina",
    },
  ];

  async function onSubmit(values: FormValues) {
    const resp = await sendEmail(values);
    if(!resp.ok){
      toast({
        variant:"default",
        title: `${resp.message}`
      })
    }else{
      toast({
        variant:"default",
        title:`${resp.message}`
      })
      form.reset();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">{t("title")}</h3>
                <p className="text-white/60">
                  {t("description")}
                </p>
                {/*inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("form.placeHolders.firstname")}
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("form.placeHolders.lastname")}
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("form.placeHolders.email")}
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={t("form.placeHolders.phone")}
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/*select */}
                <FormField
                  control={form.control}
                  name="typeService"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>{t("form.placeHolders.typeService")}</SelectLabel>
                            <SelectItem value="developer">
                              {t('form.selects.typeServices.webDevelopment')}
                            </SelectItem>
                            <SelectItem value="design">{t('form.selects.typeServices.uxDesing')}</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Textarea */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="h-[200px]"
                          placeholder={t("form.placeHolders.message")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/*btn */}
                <Button type="submit" size="md" className="max-w-40" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? t("form.sendMessage.sending") : t("form.sendMessage.send")}
                </Button>
              </form>
            </Form>
          </div>
          {/*info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
