import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectExamples from './UseEffectExamples';
import Grandparent from './Grandparent';
import ValueContext from './ValueContext';
import DisplayGrade from './DisplayGrade'
import ErrorBoundary from './ErrorBoundary';
import CSSExamples from './CSSExamples';

function App() {
  const [hide, setHide] = useState(false);
  const grades = [75, 95, -5, 55];

  return (
    <>
      {/* Uncomment this to see the first example that we've done */}

      {/* <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />} 

      <ValueContext.Provider value={hide}>
        <Grandparent />
      </ValueContext.Provider>  */}

      {/* Uncomment this to see an unhandled error */}

      {/* {grades.map((grade, index) => <DisplayGrade grade={grade} key={index} /> )} */}

      {/* Using the ErrorBoundary to handle the error
      */}

       {grades.map((grade, index) =>
        <ErrorBoundary key={index} errorUI={<h3>There was an error displaying the grade (expected, see the App.tsx code)</h3>}>
          <DisplayGrade grade={grade} />
        </ErrorBoundary>
      )}

    </>
  )
}

export default App;
