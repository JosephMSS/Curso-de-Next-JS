import { database } from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const findAll = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await database.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default findAll;
