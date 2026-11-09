
import './App.css';
import CCCar from './ClassComps/CCCar';
import EHeader from './Elements/EHeader';
import FCPerson from './Functional Comps/FCPerson';


function App() {


  return (
    <>
      <section id="center">

        <div>

          {EHeader}
          {/* {EHeader} */}

          <h1>Get started</h1>
          <p>
            Ruppin
          </p>

          <CCCar id={1} speed={200}  model={"BMW"}/> <br />
          <CCCar id={2} speed={100}  model={"KIA"}/> <br />

          <FCPerson id={3 * 8} name={"avi"} marLentg={10} />
          <FCPerson id={7} name="ben" marLentg={15} />
          <FCPerson id={1} name="ben" marLentg={15} />
        </div>

        {/* {EHeader} */}

      </section>

    </>
  )
}

export default App
