import * as S from "./Form.styled";
import { Class } from "../../types/Student";
import { FormEvent, useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";

export function Form() {
  const { students, createStudent } = useContext(StudentContext);

  const classes = Object.values(Class)
    .filter((v) => isNaN(Number(v)))
    .map((item) => {
      return item;
    });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.currentTarget;

    const { studentName, currentClass, age } = target;

    createStudent({
      id: students.length + 1,
      name: studentName.value,
      class: currentClass.value,
      age: age.value,
    });
  };

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Input
        type={"text"}
        name={"studentName"}
        placeholder="Nome do Estudante"
        size={24}
      />

      <S.Input as={"select"} name={"currentClass"}>
        <option selected disabled={true}>
          Turma
        </option>
        {classes.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </S.Input>

      <S.Input
        type={"number"}
        name={"age"}
        placeholder="Idade"
        min={18}
        max={100}
      />

      <S.Right>
        <button>ENVIAR</button>
      </S.Right>
    </S.Form>
  );
}
