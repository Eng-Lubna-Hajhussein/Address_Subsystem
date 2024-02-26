import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import AppContextProvider from "./contextapi/contexts/AppContext";
import AppRegions from "./pages/admin/AppRegions";
import AddRegion from "./components/admin/AppRegions/forms/AddRegion";
import EditRegion from "./components/admin/AppRegions/forms/EditRegion";
import SelectRegions from "./pages/user/SelectRegions";
import ViewRegions from "./pages/user/ViewRegions";
import React from "react";
import ResponsiveDrawer from "./components/sharedui/Sidebar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppContextProvider>
          <ResponsiveDrawer />
          <Switch>
            {/* admin routes */}
            <Route path="/" element={<AppRegions />} />
            {/* user routes */}
            <Route path="/selectRegions" element={<SelectRegions />} />
            <Route path="/viewRegions" element={<ViewRegions />} />
          </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
