import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConceptsLayout from './components/CoreConceptsLayout.jsx';
import ExampleLayout from './components/ExamplesLayout.jsx';
import Button from './components/HtmlLayout/Button.jsx';
import HomeIcon from './components/HtmlLayout/HomeIcon.jsx';
import PlusIcon from './components/HtmlLayout/PlusIcon.jsx';


function App() {
  return (
    // <Fragment>
    <>
      <Header />
      <main>
        <CoreConceptsLayout />
        <ExampleLayout />
        <section id="test">
          <section>
            <h2>Filled Button (Default)</h2>
            <p>
              <Button>Default</Button>
            </p>
            <p>
              <Button mode="filled">Filled (Default)</Button>
            </p>
          </section>
          <section>
            <h2>Button with Outline</h2>
            <p>
              <Button mode="outline">Outline</Button>
            </p>
          </section>
          <section>
            <h2>Text-only Button</h2>
            <p>
              <Button mode="text">Text</Button>
            </p>
          </section>
          <section>
            <h2>Button with Icon</h2>
            <p>
              <Button Icon={HomeIcon}>Home</Button>
            </p>
            <p>
              <Button Icon={PlusIcon} mode="text">
                Add
              </Button>
            </p>
          </section>
          <section>
            <h2>Buttons Should Support Any Props</h2>
            <p>
              <Button mode="filled" disabled>
                Disabled
              </Button>
            </p>
            <p>
              <Button onClick={() => console.log('Clicked!')}>Click me</Button>
            </p>
          </section>
        </section>
      </main>
      </>
    // </Fragment> old version
  );
}

export default App;
