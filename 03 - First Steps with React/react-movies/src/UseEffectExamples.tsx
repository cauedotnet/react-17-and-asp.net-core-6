import { useEffect, useState } from "react"

export default function UseEffectExamples() {
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        // Executed immediately
        console.log('component loaded');

        return () => {
            // Run before the component is destroyed
            console.log('the component will be destroyed');
        }
    }, []); // [] = list of dependencies. Empty list tells react to only run once at load.

    useEffect(() => {
        document.title = `${clicks} times`;
    }, [clicks]) // this way the effect will only be applied when 'clicks' variable changes

    return (
        <>
            <h1>UseEffect Examples</h1>
            <div>
                <button onClick={() => setClicks(clicks + 1)}>
                    You have clicked {clicks} times
                </button>
            </div>
        </>
    )
}
