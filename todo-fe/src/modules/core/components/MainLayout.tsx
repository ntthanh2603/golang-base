import { Header } from "./Header";

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="flex-grow p-8 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
};
