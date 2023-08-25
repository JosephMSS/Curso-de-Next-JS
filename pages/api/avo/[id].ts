import { database } from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const findOne = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;
    if (!id || Array.isArray(id)) {
      throw new Error("Invalid api id ");
    }
    const data = await database.getById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default findOne;
