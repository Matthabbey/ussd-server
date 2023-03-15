import express, { Request, response, Response } from "express";
import { DataModel } from "../model/index";

export const getDAta = (req: Request, res: Response) => {
  res.status(200).json("successful");
};

export const createData = (req: Request, res: Response) => {
  const { phoneNumber, text, sessionId } = req.body;

  let response = "";
  if (text === "") {
    response = `CON Enter your name here`;
  }

  if (text !== "") {
    let array = text.split("*");

    if (array.length === 1) {
      response = `CON Enter your id number`;
    } else if (array.length === 2) {
      if (parseInt(array[1]) > 0) {
        response = `CON Please confirm if you want to save the data. \n1. Confirm \n2. Cancel\n3. View all users`;
      } else {
        response = `END Network error, Please try again`;
      }
    } else if (array.length === 3) {
      if (parseInt(array[2]) === 1) {
        let data = new DataModel();
        data.fullName = array[0];
        data.id_number = array[1];
        data.save(() => {
          response = "END Your data has been saved successfully";
        });
      } else if (parseInt(array[2]) === 2) {
        response = `END Sorry, data was not saved.`;
      } else if (parseInt(array[2]) === 3) {
        DataModel.find({}, (err: any, users: any) => {
          let user_data = `${
            users.length < 1
              ? `Data is not found`
              : `${users.map((item: any, index: string) => {
                  return `${index + 1}. ${item.fullName}\n `;
                }).join('')}`
          }`;

          response = `END Current users. \n${user_data}`;
        });
      } else {
        response = `END Invalid Input, Please try again.`;
      }
    }
  }
  setTimeout(() => {
    console.log(response, "2");
    res.send(response);
    res.end();
  }, 2000);
};
