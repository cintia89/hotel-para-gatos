import { BrowserRouter as Router, Route } from "react-router-dom";
import { Porque } from "./page/porque-nos/porque-nos";
        
export const Routes = () => {
    return (
        <Router>
            <Route path="/porque-nos" element={<Porque />} />
        </Router>
 
    )
}


