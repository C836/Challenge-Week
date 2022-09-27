import * as S from "./Loading.styled";

export function Loading() {
  return (
    <S.Loading>
      <div>
        <h2>
          Carregando informações da API
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </h2>
      </div>
    </S.Loading>
  );
}
