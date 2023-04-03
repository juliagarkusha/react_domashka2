import { Routes, Route } from "react-router-dom";
import DomashkaDefaultButton from "../components/DomashkaDefaultButton";
import DomashkaAccordionButton from "../components/DomashkaAccordionButton";
import DomashkaToggleButton from "../components/DomashkaToggleButton";

function Router () {
  return(
    <Routes>
      <Route path="/" element={<DomashkaDefaultButton />}/>
      <Route path="/2" element={<DomashkaAccordionButton userName="Stepan" userAge={25}/>} />
      <Route path="/3" element={<DomashkaToggleButton />}/>
    </Routes>
  )
}

export default Router;
