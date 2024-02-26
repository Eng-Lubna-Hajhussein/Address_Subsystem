import {
  BrowserRouter,
  Route,
  Routes as Switch,
} from "react-router-dom";
import AppContextProvider from "./contextapi/contexts/AppContext";
import AppRegions from "./pages/admin/AppRegions";
import AddRegion from "./components/admin/AppRegions/forms/AddRegion";
import EditRegion from "./components/admin/AppRegions/forms/EditRegion";
import SelectRegions from "./pages/user/SelectRegions";
import ViewRegions from "./pages/user/ViewRegions";

function App() {
  return (
    <BrowserRouter>
        <AppContextProvider>
              <Switch>
                {/* admin routes */}
                <Route path="/" element={<AppRegions />} />
                <Route path="/add:PID" element={<AddRegion />} />
                <Route path="/edit/:ID/:strName" element={<EditRegion />} />
                {/* user routes */}
                <Route path="/selectRegions" element={<SelectRegions />} />
                <Route path="/viewRegions" element={<ViewRegions />} />
              </Switch>
        </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
