export type ContestResult = Readonly<{
  IsRated: boolean;
  Place: number;
  OldRating: number;
  NewRating: number;
  Performance: number;
  InnerPerformance: number;
  ContestScreenName: string;
  ContestName: string;
  ContestNameEn: string;
  EndTime: string;
}>;

export const userHistoryAPI = async (
  userName: string
): Promise<ContestResult[]> => {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://atcoder.jp/users/${userName}/history/json`
  );
  return res.json() as Promise<ContestResult[]>;
};
