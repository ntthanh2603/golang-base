import { Outlet, Route, Routes } from "react-router-dom";
import { AuthLayout } from "../../auth/components/AuthLayout";
import LoginForm from "../../auth/components/LoginUI";
import { RegisterUI } from "../../auth/components/RegisterUI";
import TodoList from "../../todo/components/TodoList";
import PageNotFound from "./PageNotFound";
import { PrivateComponent } from "../../auth/components/PrivateComponent";
import { MainLayout } from "./MainLayout";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />}>
        <Route path="" element={<LoginForm />} />
      </Route>
      <Route path="/register" element={<AuthLayout />}>
        <Route path="" element={<RegisterUI />} />
      </Route>
      <Route
        path="/"
        element={
          <PrivateComponent>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </PrivateComponent>
        }
      >
        <Route path="/" element={<TodoList />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
