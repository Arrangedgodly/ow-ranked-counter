import Header from './Header';
import Counter from './Counter';
const tank = require('../images/New_Tank_Icon.webp');
const damage = require('../images/New_Damage_Icon.webp');
const support = require('../images/New_Support_Icon.webp');
const openq = require('../images/openqueue.webp');

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Counters'>
        <Counter 
          title='Tank'
          logo={tank}
        />
        <Counter
          title='Damage'
          logo={damage}
        />
        <Counter
          title='Support'
          logo={support}
        />
        <Counter
          title='Open Queue'
          logo={openq}
        />
      </div>
    </div>
  );
}

export default App;
