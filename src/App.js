import { useState, useEffect, useCallback } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0)
  const [num1] = useState(2);
  const [num2] = useState(2);

  // use useCallback if we have our function in dependency array on useEfect.
  const suma = useCallback(() => num1 + num2, [num1, num2]);
  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  useEffect(() => {
    console.log(`You use ${suma()}`);
    setResult(suma())
  }, [suma]);

  useEffect(() => {
    console.log(`You use ${buildArray()}`);
    setResult(buildArray())
  }, [buildArray]);

  return (
    <main>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        name="search"
        id="search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p hidden>{result}</p>
    </main>
  );
}

export default App;
