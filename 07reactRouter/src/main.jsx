import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import Layout from "./components/Layout.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx"
import Github, {GithubInfo} from "./components/Github.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [{
      path: "",
      Component: Home
    },
    {
      path: "about",
      Component: About
    },
    {
      path: "contact",
      Component: Contact
    },
  {
    path: "github",
    loader: GithubInfo,
    Component: Github
  }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
