import React from "react";
import { Provider } from 'react-redux';
import {renderToString} from "react-dom/server";
import {StaticRouter as Router} from "react-router";
import App from "../../src/common/App";


export default function (store ,url , context) {

    return renderToString(
        <Provider store={store}>
            <Router location={url} context={context} >
                <App />
            </Router>
         </Provider>
    )

}
