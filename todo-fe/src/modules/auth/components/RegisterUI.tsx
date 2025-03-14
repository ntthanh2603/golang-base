import { useForm } from "react-hook-form";
import { IRegisterForm } from "../models/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../models/schema";
import FormProvider from "../../core/components/FormProvider";
import { RHFInput } from "../../core/components/RHFInput";
import { useAuth } from "../hooks/useAuth";

export const RegisterUI = () => {
  const { handleRegister } = useAuth();
  const defaultValues: IRegisterForm = {
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema),
  });

  const { handleSubmit } = methods;

  return (
    <div className="w-full max-w-md">
      <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormProvider methods={methods} onSubmit={handleSubmit(handleRegister)}>
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Login
          </h2>
          <div className="mb-4">
            <RHFInput
              name="first_name"
              type="text"
              placeholder="Enter your first name"
              label="First Name"
            />
          </div>
          <div className="mb-4">
            <RHFInput
              name="last_name"
              type="text"
              placeholder="Enter your last name"
              label="Last Name"
            />
          </div>
          <div className="mb-4">
            <RHFInput
              name="email"
              type="text"
              placeholder="Enter your email"
              label="Email"
            />
          </div>
          <div className="mb-6 relative">
            <RHFInput
              name="password"
              type="password"
              placeholder="Enter your password"
              label="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/login"
            >
              Already have an account?
            </a>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};
