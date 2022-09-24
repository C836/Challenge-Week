import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Chart } from "./components/Chart";
import { Header } from "./layout/Header";
import { Summary } from "./layout/Summary";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "./contexts/StudentContext";
import * as S from "./App.styled";

function App() {
  const { students } = useContext(StudentContext);

  const [ageCount, setAgeCount] = useState({
    "18-21": { count: 0 },
    "22-25": { count: 0 },
    "26-29": { count: 0 },
    "30-33": { count: 0 },
    over33: { count: 0 },
  });

  const ranges = {
    "18-21": { min: 18, max: 21 },
    "22-25": { min: 22, max: 25 },
    "26-29": { min: 26, max: 29 },
    "30-33": { min: 30, max: 33 },
  };

  useEffect(() => {
    const ages = students.map((item) => {
      return item.age;
    });

    let newAgeCount = ageCount;

    for (const datum of ages) {
      let range =
        (Object.keys(ranges).find(
          (range) =>
            ranges[range as keyof typeof ranges].min <= datum &&
            ranges[range as keyof typeof ranges].max >= datum
        ) as keyof typeof ranges) || "over33";

      let entry = ageCount[range];

      if (entry) {
        const currentCount = newAgeCount[range].count;
        newAgeCount = { ...newAgeCount, [range]: { count: currentCount + 1 } };
      }
    }

    setAgeCount(newAgeCount);
  }, [students]);

  return (
    <div className="App">
      <Header />
      <S.Main>
        <Form />
        <Summary />
        <S.Data>
          <Table />
          <Chart ageCount={ageCount} ranges={Object.keys(ranges)} />
        </S.Data>
      </S.Main>
    </div>
  );
}

export default App;
