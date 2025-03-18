import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Layout } from "@/layouts/Layout";

export const App = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);