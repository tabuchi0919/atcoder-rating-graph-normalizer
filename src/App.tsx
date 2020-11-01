import React, { useState, useCallback } from "react";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Legend,
  Scatter,
} from "recharts";

import { userHistoryAPI, ContestResult } from "./apis/userHistoryAPI";
import { Form } from "./components/Form";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const App: React.FC = () => {
  const [userNames, setUserNames] = useState<ReadonlyArray<string>>([]);
  const [chartType, setChartType] = useState<string>("ratedCount");
  const [userHistories, setUserHistories] = useState<
    ReadonlyArray<ReadonlyArray<ContestResult>>
  >([]);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setUserHistories(
      await Promise.all(
        userNames.map(async (userName: string) => userHistoryAPI(userName))
      )
    );
  };

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNames(e.target.value.split(","));
  }, []);

  const handleSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setChartType(e.target.value);
    },
    []
  );

  return (
    <>
      <h1>AtCoder Rating Graph Normalizer</h1>
      <Form
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
      />
      <ScatterChart
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        width={500}
      >
        <CartesianGrid />
        <XAxis dataKey="x" name="Rated Count" type="number" />
        <YAxis dataKey="y" name="Rate" type="number" />
        <ZAxis range={[100]} type="number" />
        <Legend />
        {(chartType === "ratedCount" &&
          userHistories.map(
            (userHistory: ReadonlyArray<ContestResult>, i: number) => (
              <Scatter
                data={userHistory
                  .filter((contestResult) => contestResult.IsRated)
                  .map((contestResult, j: number) => ({
                    x: j,
                    y: contestResult.NewRating,
                  }))}
                fill={COLORS[i]}
                line
                name={userNames[i]}
              />
            )
          )) ||
          (chartType === "totalCount" &&
            userHistories.map(
              (userHistory: ReadonlyArray<ContestResult>, i: number) => (
                <Scatter
                  data={userHistory.map((contestResult, j: number) => ({
                    x: j,
                    y: contestResult.NewRating,
                  }))}
                  fill={COLORS[i]}
                  line
                  name={userNames[i]}
                />
              )
            )) ||
          userHistories.map(
            (userHistory: ReadonlyArray<ContestResult>, i: number) => (
              <Scatter
                data={userHistory.map((contestResult) => ({
                  x:
                    (Date.parse(contestResult.EndTime) -
                      Date.parse(userHistory[0].EndTime)) /
                    86400000,
                  y: contestResult.NewRating,
                }))}
                fill={COLORS[i]}
                line
                name={userNames[i]}
              />
            )
          )}
      </ScatterChart>
    </>
  );
};
