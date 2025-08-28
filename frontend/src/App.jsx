import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
// Shadcn happens to work really well

function App() {
  return (
    <>
      <div className="flex flex-col gap-2 min-h-svh  items-center justify-center">
        <Button>Click me</Button>
        <Button>Go here</Button>
      </div>
    </>
  );
}

export default App;
