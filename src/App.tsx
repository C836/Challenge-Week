import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Header } from "./layout/Header";
import { Summary } from "./layout/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Summary />
        <Table />
      </main>
    </div>
  );
}

export default App;
