import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
