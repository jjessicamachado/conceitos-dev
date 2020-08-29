import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "diego@rocketseat.com.br",
    password: "1234",
    techs: ["Node", "React", "Angular", { title: "JS", experience: 100 }],
  });

  console.log(user.email);

  return response.json({ message: "Hello World " });
}
