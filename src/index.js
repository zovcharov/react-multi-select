import React from "react";
import ReactDOM from "react-dom";

import Select from './components/Select/Select';

import { fruitsMock } from './constants/mockSelectData';

const SelectKit = () => (
   <>
      <div>
         <Select items={fruitsMock} />
      </div>
      <div style={{marginTop: '30px'}}>
         <Select items={fruitsMock} />
      </div>
   </>
);

ReactDOM.render(<SelectKit />, document.querySelector("#root"));