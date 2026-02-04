import Accordion from "./Accordion";
import "./App.css";

const data = [
  { title: "title-1", content: "sample content -1" },
  { title: "title-2", content: "sample content -2" },
  { title: "title-3", content: "sample content -3" },
  { title: "title-4", content: "sample content -4" },
];

// Controlled = comment/remove internal useState
// Uncontrolled = comment/remove openIndexes + onChange props

const App = () => {
  return (
    <div className="app">
      <Accordion defaultOpenIndexes={[0]} allowMultiple={false}>
        {data.map((item, index) => (
          <Accordion.Item key={index} index={index}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Panel>{item.content}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default App;
