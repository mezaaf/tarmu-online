"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <form action="" className="space-y-2">
        <div className="grid grid-cols-2 gap-x-2 sm:gap-x-3 lg:gap-x-4">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input type="text" {...field} placeholder="Nama Depan" />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input type="text" {...field} placeholder="Nama Belakang" />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    placeholder="No Whatsapp"
                    onWheel={(e) => e.currentTarget.blur()}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input type="email" {...field} placeholder="Email" />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Textarea
                  className="h-30"
                  {...field}
                  placeholder="Pesan anda"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="cursor-pointer bg-pondok-accent hover:bg-pondok-accent/70 text-pondok-text-light"
        >
          Kirim
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
