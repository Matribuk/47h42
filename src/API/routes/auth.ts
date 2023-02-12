import express, { Request, Response } from 'express';
import { createUser, getUser } from '../user';
import jwt from 'jsonwebtoken';
import env_var from 'env-var';
import dotenv from 'dotenv'
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';
import app from '../../app';

dotenv.config();
app.use(bodyParser.json());
// declare type Express = typeof import('express');

function check_email(email: string): boolean {
    let reg = new RegExp('([a-z0-9]\w+\.[a-z0-9]\w+(@epitech.eu))');
    if (reg.test(email) === false)
        return false
    if (getUser(email) == null)
        return true
    return false
}

export const router = express.Router()

router.post('/register', (req: Request, res: Response) => {
    if (req.body == undefined) {
        return res.status(StatusCodes.BAD_REQUEST).send("no body");
    }
    let email = req.body.email;
    let password = req.body.password;

    if (email === undefined || password === undefined) {
        return res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    }
    console.log("success");
    let hashPassword = bcrypt.hashSync(password);
    const user = createUser(email, hashPassword);
    const token = jwt.sign(user.id, process.env.SECRET!, {expiresIn: '1day'});
    res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED);
});

app.post('/login', (req: Request, res: Response) => {
    let email: string = req.body.email;
    let password: string = req.body.password;

    if (email === undefined || password === undefined) {
        res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    }
});
