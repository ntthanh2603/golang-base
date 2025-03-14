import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps {
  name: string;
  label?: string;
}

export const RHFInput: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ name, label, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="text-left">
          <div className="mb-4">
            {label && (
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor={name}
              >
                {label}
              </label>
            )}
            <input
              {...field}
              className={twMerge(
                `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  error ? "border-red-500" : ""
                }`,
              )}
              {...props}
            />
            {error && (
              <p className="text-red-500 text-xs italic mt-1">
                {error.message}
              </p>
            )}
          </div>
        </div>
      )}
    />
  );
};
