import { useEffect, useState } from "react";

export default function Example() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Example Mounted");

    return () => {
      console.log("Unmounted Example");
    };
  }, []);

  useEffect(() => {
    console.log("Updated Name");
    return () => {
      console.log("Cleaning up update");
    };
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name} 
        onChange={(evt) => setName(evt.target.value)}
      />
    </div>
  );
}
