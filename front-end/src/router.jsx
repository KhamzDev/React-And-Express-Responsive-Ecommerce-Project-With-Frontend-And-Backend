import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/homepage/HomePage";
import ProductClick from "./pages/product-click/ProductClick";
import SearchPage from "./pages/search-page/SearchPage";
import CartPage from "./pages/cart-page/CartPage";


export const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/product/:id",
                element: <ProductClick />
            },
            {
                path: "/search/product",
                element: <SearchPage />
            },
            {
                path: "/cart",
                element: <CartPage />
            }
        ]
    }
])