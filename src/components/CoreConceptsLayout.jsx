import CoreConcept from './CoreConcept/CoreConcept';
import {CORE_CONCEPTS} from '../data.js';

export default function CoreConceptsLayout() {
    return (
        <section id="core-concepts">
        <ul>
          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}
          /> */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
        </ul>
      </section>
    );
}