import 'dotenv/config';
import express from 'express'; //npm install express cors dotenv
import cors from 'cors';
import config from './configs';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo'
import { connect } from './utils/db.connection'
import { googleAuth } from './configs/google.config'
import { routesInit } from './api/routes'

const app = express(); //express constructor
const PORT = process.env.PORT || "8090";

app.use(cors({ origin: "http://localhost:3000" })); //to use cors pkg
app.use(express.json({ limit: "10mb" })); //limit data coming from request body

//for auth (connect-mongo dependency)
app.use(
    session({
        secret: config.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: config.DB_CONNECTION }),
        cookie: {
            secure: false,
            expires
                : new Date(Date.now() + 60000),
            maxAge: 60000
        }
    })
)
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res, next) => {
    res.send("<a href='http://localhost:8090/auth/google'>auth</a>");
    next();
});

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`);
    connect();
    routesInit(app, passport);
    googleAuth(passport);
});