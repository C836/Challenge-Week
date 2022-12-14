import { useContext, useEffect, useRef, useState } from "react";
import { StudentContext } from "./contexts/StudentContext";

import * as S from "./App.styled";
import { Chart, Form, Table } from "./components";
import { Header, Summary } from "./layout";
import { Placeholder } from "./components/Placeholder";
import { Loading } from "./layout/Loading";

const initialAgeCount = {
  "18-21": { count: 0 },
  "22-25": { count: 0 },
  "26-29": { count: 0 },
  "30-33": { count: 0 },
  over33: { count: 0 },
};
const ranges = {
  "18-21": { min: 18, max: 21 },
  "22-25": { min: 22, max: 25 },
  "26-29": { min: 26, max: 29 },
  "30-33": { min: 30, max: 33 },
};

function App() {
  const loadedRef = useRef(false);
  const { students, syncApi } = useContext(StudentContext);

  const [ageCount, setAgeCount] = useState(initialAgeCount);

  useEffect(() => {
    const ages = students.map((item) => {
      return Number(item.age);
    });

    let newAgeCount = initialAgeCount;

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
        newAgeCount = {
          ...newAgeCount,
          [range]: { count: currentCount + 1 },
        };
      }
    }

    loadedRef.current = true;
    setAgeCount(newAgeCount);
  }, [students]);

  useEffect(() => {
    syncApi();
  }, []);

  return (
    <div className="App">
      <Header />
      <S.Main>
        <Form disabled={!loadedRef.current} />
        {loadedRef.current ? (
          students.length ? (
            <>
              <Summary />
              <S.Data>
                <Table />
                <Chart ageCount={ageCount} ranges={Object.keys(ranges)} />
              </S.Data>
            </>
          ) : (
            <Placeholder />
          )
        ) : (
          <Loading />
        )}
      </S.Main>
    </div>
  );
}

export default App;
