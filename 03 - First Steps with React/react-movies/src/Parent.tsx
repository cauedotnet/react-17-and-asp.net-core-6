import { useContext } from 'react';

import Child from './Child';
import ValueContext from './ValueContext';
//See also the app.tsx and GrandParent to understand the implementation of ValueContext.Provider

export default function Parent() {
    const value = useContext(ValueContext)
    return (
        <>
            <div>
                From the parent, {value ? 'the value is true' : 'the value is false'}
            </div>
            <Child />
        </>
    )
}