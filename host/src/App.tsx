import { useEffect, useRef } from "react";
import AppRemote1 from "remote1/App";
import HelloWorldRemote2 from "remote2/HelloWorldWrapper";

function App() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      HelloWorldRemote2(divRef.current);
    }
  }, []);

  return (
    <div className="bg-red-950 text-white h-screen w-screen p-8 text-lg flex flex-col gap-8">
      <div>
        <h1>Host</h1>
      </div>
      <div className="flex flex-col gap-2 items-center p-8 bg-blue-950">
        <AppRemote1 />
      </div>
      <div className="flex flex-col gap-2 items-center p-8 bg-green-950">
        <div ref={divRef}></div>
      </div>
    </div>
  );
}
export default App;
