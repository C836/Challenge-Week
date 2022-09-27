import { useEffect, useState } from "react";

import * as S from "./Chart.styled";
import { colors } from "../../global";
import { Ages } from "./../../types/Student";

type Props = {
  ageCount: Ages;
  ranges: string[];
};

export function Chart({ ageCount, ranges }: Props) {
  const [chartValues, setChartValues] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);

  const getPercentage = (partialValue: number, totalValue: number) => {
    return (100 * partialValue) / totalValue;
  };
  const getChartSlices = (chartValues: number[]) => {
    // offset
    const red = chartValues[0];
    const orange = red + chartValues[1];
    const blue = orange + chartValues[2];
    const green = blue + chartValues[3];
    const yellow = green + chartValues[4];

    const result = [
      [0, red],
      [red, orange],
      [orange, blue],
      [blue, green],
      [green, yellow],
    ];

    return result;
  };

  useEffect(() => {
    const countArray = Object.values(ageCount).map((item) => {
      return item.count;
    });

    const total = countArray.reduce((partialSum, a) => partialSum + a, 0);
    const chartValues = countArray.map((item) => {
      return getPercentage(item, total);
    });

    const chartSlices = getChartSlices(chartValues);
    setChartValues(chartSlices);
  }, [ageCount]);

  return (
    <S.Chart>
      <S.Wheel chartValues={chartValues} />
      <S.Captions>
        {ranges.map((item, index) => {
          const range = item.split("-");
          const color = Object.values(colors.chart)[index];

          return (
            <S.Caption color={color} key={index}>
              De {range[0]} a {range[1]} anos
            </S.Caption>
          );
        })}
        <S.Caption color={colors.chart.yellow}>Acima de 33 anos</S.Caption>
      </S.Captions>
    </S.Chart>
  );
}
