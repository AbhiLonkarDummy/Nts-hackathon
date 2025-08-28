import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
// Shadcn happens to work really well
// Added some dummy frontend code
function App() {
  return (
    <>
      <div className="flex flex-col gap-2 min-h-svh  items-center justify-center">
        <Button>Click me</Button>
        <Button>Go here</Button>
        <Button>The dummy code happens to go in here</Button>
      </div>
    </>
  );
}

export default App;
