import ControlledForm from "./components/ControlledForm"
import ControlledForm2 from "./components/ControlledForm2"
import UncontrolledForm from "./components/UncontrolledForm"

const App = () => {
  return (
    <div>
      <ControlledForm />
      <hr />
      <ControlledForm2 />
      <hr />
      <UncontrolledForm />
    </div>
  )
}

export default App