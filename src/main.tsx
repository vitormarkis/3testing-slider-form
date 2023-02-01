import App from "@components/App"
import { GlobalStoreProvider } from "@contexts/store"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  </React.StrictMode>
)
