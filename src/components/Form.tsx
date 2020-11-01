import React from "react";

type Props = {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const formSelectOptions = {
  ratedCount: "コンテスト参加回数(ratedのみ)",
  totalCount: "コンテスト参加回数(unrated含む)",
  ratedDate: "コンテスト初参加からの日数",
};

export const Form: React.FC<Props> = ({
  handleSubmit,
  handleInput,
  handleSelect,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="userName">
        ユーザ名(カンマ区切り、4人まで)
        <input name="userName" onChange={handleInput} type="text" />
      </label>
    </div>
    <div>
      <label htmlFor="chartType">
        横軸
        <select name="chartType" onChange={handleSelect}>
          {Object.entries(formSelectOptions).map((entry: [string, string]) => (
            <option value={entry[0]}>{entry[1]}</option>
          ))}
        </select>
      </label>
    </div>
    <div>
      <input type="submit" value="表示" />
    </div>
  </form>
);
