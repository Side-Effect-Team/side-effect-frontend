import type { NextApiRequest, NextApiResponse } from "next";
const { forums } = require("./data");

interface RecruitType {
  id: number;
  headerTitle: string;
  tag: string[];
  title: string;
  content: string;
  createdAt: string;
  like: boolean;
}

interface ErrorMsgType {
  message: string;
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<RecruitType[] | ErrorMsgType>,
) => {
  const recruit = forums.filter(
    (item: RecruitType) => item.id + "" === req.query.recruitId,
  );

  if (req.method === "GET") {
    res.status(200).json(recruit);
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `${req.method} 메서드는 허용되지 않습니다` });
  }
};
