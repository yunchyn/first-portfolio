import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';

export default function App() {
  return (
    <div className="w-full h-screen">
      <RouterProvider router={Router} />
    </div>
  );
}
