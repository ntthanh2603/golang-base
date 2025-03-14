import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface IPrivateComponentProps {
  children: React.ReactNode;
}

export const PrivateComponent: React.FC<IPrivateComponentProps> = ({
  children,
}) => {
  const { profile, loading } = useAuth();
  const navigate = useNavigate();

  console.log("Loading::::", loading);
  useEffect(() => {
    console.log("Profile::::", profile);
    if (!profile) {
      console.log("Redirecting to login");
      navigate("/login", { replace: true });
    }
  }, []);

  return <>{profile ? children : <></>}</>;
};
