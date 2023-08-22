import { database } from "@database";
import { ServerResponse, IncomingMessage } from "http";

const findAll = async (req: IncomingMessage, res: Response) => {
  try {
    const data = await database.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default findAll;
