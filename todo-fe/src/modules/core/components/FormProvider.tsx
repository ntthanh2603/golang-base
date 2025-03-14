import React from "react";
import { FormProvider as Form } from "react-hook-form";

interface FormProviderProps {
  children: React.ReactNode;
  methods: any;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
