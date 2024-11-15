import { useState, Fragment } from 'react';
import {EXAMPLES} from '../data.js';
import TabButton from './TabButton/TabButton.jsx';
import SectionBlock from './HtmlLayout/SectionBlock.jsx';
import TabBlock from './HtmlLayout/TabBloc.jsx'

export default function ExampleLayout() {
    const [selectedTopic, setSelectedTopic] = useState();

    function hendleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please selected topic</p>;
  
    if(selectedTopic) {
      tabContent = (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>);
    }
    return (
        <SectionBlock title='Example' id='examples'>
        <menu>
            {/* <TabButton 
                isSelected={ selectedTopic === 'components' } 
                onSelect={() => hendleSelect('components')}>Components</TabButton> */}
            <TabButton 
                isSelected={ selectedTopic === 'components' } 
                onClick={() => hendleSelect('components')}>Components</TabButton>
            <TabButton 
                isSelected={ selectedTopic === 'jsx' } 
                onClick={() => hendleSelect('jsx')}>JSX</TabButton>
            <TabButton 
                isSelected={ selectedTopic === 'props' }
                onClick={() => hendleSelect('props')}>Props</TabButton>
            <TabButton 
                isSelected={ selectedTopic === 'state' } 
                onClick={() => hendleSelect('state')}>State</TabButton>
        </menu>
        <TabBlock
            // buttonsContainer={ SectionBlock } 
            ButtonsContainer="menu" 
            buttons={
            // multiply slots
            <>
                <TabButton 
                    isSelected={ selectedTopic === 'components' } 
                    onClick={() => hendleSelect('components')}>Components</TabButton>
                <TabButton 
                    isSelected={ selectedTopic === 'jsx' } 
                    onClick={() => hendleSelect('jsx')}>JSX</TabButton>
                <TabButton 
                    isSelected={ selectedTopic === 'props' }
                    onClick={() => hendleSelect('props')}>Props</TabButton>
                <TabButton 
                    isSelected={ selectedTopic === 'state' } 
                    onClick={() => hendleSelect('state')}>State</TabButton>
            </>
        }>
        {tabContent}
        </TabBlock>


          {/* { !selectedTopic ? (
            <p>Please selected topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)
          } */}

    </SectionBlock>
    )
}