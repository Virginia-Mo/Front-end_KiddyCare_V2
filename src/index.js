import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from "react-redux"
import store from "./store"

import App from "./components/App/App"
// import reportWebVitals from "./reportWebVitals"

const rootReactElement = (
<Provider store={store}>
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
</Provider>
)

const root = createRoot(document.getElementById("root"))

root.render(rootReactElement)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
