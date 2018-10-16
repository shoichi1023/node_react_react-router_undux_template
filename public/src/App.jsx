import React from "react";
import { Route } from "react-router-dom";
//component
import Example from "./pages/Example";

const app = () => (
    <div>
        <Route exact path="/" component={Example} />
    </div>
);

export default app;