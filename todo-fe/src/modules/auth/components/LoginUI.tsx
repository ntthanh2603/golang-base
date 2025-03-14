import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RHFInput } from "../../core/components/RHFInput";
import { ILoginForm } from "../models/auth";
import { loginSchema } from "../models/schema";
import FormProvider from "../../core/components/FormProvider";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  const defaultValues: ILoginForm = {
    email: "devops@200lab.io",
    password: "12345678",
  };

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit } = methods;

  return (
    <div className="w-full max-w-md">
      <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormProvider methods={methods} onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Login
          </h2>
          <div className="mb-4">
            <RHFInput
              name="email"
              type="email"
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
          <button
            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-blue-500 hover:text-blue-800 font-bold"
                onClick={() => navigate("/register")}
              >
                Register here
              </a>
            </p>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginForm;
