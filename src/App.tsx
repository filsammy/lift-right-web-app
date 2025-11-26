import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Outlet />
    </div>
  );
}
