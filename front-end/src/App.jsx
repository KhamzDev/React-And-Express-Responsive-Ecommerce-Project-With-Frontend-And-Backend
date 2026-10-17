import { RouterProvider } from "react-router-dom";
import { route } from "./router";
import SeReProvider from "./services/context/SeReProvider";
import SearchPage from "./pages/search-page/SearchPage";


function App() {
  return (
    <>
    <SeReProvider>
      <RouterProvider router={route} />
    </SeReProvider>
    </>
  )
}

export default App
