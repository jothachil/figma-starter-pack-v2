import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";
import { pluginApi } from "./api";
import { Input, Select, Button } from "react-figma-plugin-ds";
import "react-figma-plugin-ds/figma-plugin-ds.css";

declare function require(path: string): any;

function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ]; // Updated options format

  const onCreate = () => {
    const count = Number(inputRef.current?.value || 0);
    pluginApi.createRectangle(count);
    pluginApi.notify(`Added ${count} rectangles`);
  };

  const onCancel = () => {
    pluginApi.exit();
  };

  const onSelect = (option: { value: string; label: string }) => {
    console.log(`Selected: ${option.label}`);
  };

  return (
    <main className="bg-white h-screen relative ">
      <div className="pt-2 flex items-center gap-x-2 p-2">
        <div className="">
          <Select
            className="asd"
            defaultValue=""
            onChange={function _() {}}
            onExpand={function _() {}}
            options={[
              {
                label: "Item 1",
                title: "Item 1 description",
                value: 1,
              },
              {
                label: "Item 2",
                title: "Item 2 description",
                value: 2,
              },
            ]}
            placeholder="Placeholder text..."
          />
        </div>
      </div>
      <hr className="border-t  border-neutral-200 " />
      <div className="text-4xl">Hello figma</div>
      <div className=" absolute bottom-0 w-full ">
        <hr className="border-t border-neutral-200 " />
        <div className="p-2">
          <Button className="w-full flex justify-center">Hello figma</Button>
        </div>
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-page")!);
root.render(<App />);
