import React from "react"
import ReactDOM from "react-dom"
import GlobalStyle from "./components/globalstyle/GlobalStyle"
import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>,
    document.getElementById("root")
)
