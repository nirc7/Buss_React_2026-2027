
import './App.css'
import EHeader from './Elements/EHeader'
import FCPerson from './Functional Comps/FCPerson'


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

          <FCPerson id={3 * 8} name={"avi"} marLentg={10} />
          <FCPerson id={7} name="ben" marLentg={15} />
        </div>

        {/* {EHeader} */}

      </section>

    </>
  )
}

export default App
