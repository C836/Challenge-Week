import styled from "styled-components";
import { colors } from "./../../global";

const diameter = 230;

export const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media (max-width: 1050px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const Wheel = styled.div<{ chartValues: number[][] }>`
  position: relative;
  background: conic-gradient(
    ${colors.chart.red} ${props => props.chartValues[0][0]}% ${props => props.chartValues[0][1]}%,
    ${colors.chart.orange} ${props => props.chartValues[1][0]}% ${props => props.chartValues[1][1]}%,
    ${colors.chart.blue} ${props => props.chartValues[2][0]}% ${props => props.chartValues[2][1]}%,
    ${colors.chart.green} ${props => props.chartValues[3][0]}% ${props => props.chartValues[3][1]}%,
    ${colors.chart.yellow} ${props => props.chartValues[4][0]}% ${props => props.chartValues[4][1]}%
  );
  border-radius: 50%;
  min-width: ${diameter}px;
  min-height: ${diameter}px;

  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    background-color: ${colors.yellow};
    border-radius: 50%;
    min-width: ${diameter / 3}px;
    min-height: ${diameter / 3}px;
  }

  @media (max-width: 1050px) {
    min-width: ${diameter / 1.1}px;
    min-height: ${diameter / 1.1}px;

    ::after {
      content: "";
      min-width: ${(diameter / 3) / 1.1}px;
      min-height: ${(diameter / 3) / 1.1}px;
    }
  }
`;

export const Captions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Caption = styled.div<{ color: string }>`
  font-family: "Archivo";
  line-height: 36px;

  display: flex;
  align-items: center;
  white-space: nowrap;

  ::before {
    content: "";
    min-width: 20px;
    min-height: 20px;
    margin-right: 10px;
    background-color: ${props => props.color};
  }
`;
