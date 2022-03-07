import { Request, Response } from "express";

const getAllTasks = (reqeust: Request, response: Response) => {
  response.status(200).json([
    {
      name: "do something",
      updatedTime: new Date(),
    },
    {
      name: "do another thing",
      updatedTime: new Date(),
    },
  ]);
};

export default { getAllTasks };
