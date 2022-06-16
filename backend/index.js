import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { updateforms } from "./controllers/addForm.js";
import addProducts from "./routes/addProduct.js";
import addForms from "./routes/addForm.js";
import delForms from "./routes/delForm.js"
import loginrouter from "./routes/loginRouter.js";
import passport from "passport";
import localStrategy from "passport-local";
import UserCollection from "./models/users.js";
import session from "express-session";
import { cfg } from "./cfg.js";
import { authenticate } from "./Middleware/Auth.js";
const app = express();

const url =
  "mongodb+srv://kazimabbas:115121Kazim@reactapp.d0hbu.mongodb.net/?retryWrites=true&w=majority";

//take two param
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected"));

app.listen(5000);

//1st use this
app.use(cors());

//then this
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: cfg.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

passport.use(new localStrategy(UserCollection.authenticate()));



app.use("/addProduct", addProducts);
app.use("/addForm", addForms);
app.use("/show", addForms);
app.use("/delForm",delForms);
app.use("/updateform",updateforms);
app.use("/BoostCanada", loginrouter);

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(UserCollection.serializeUser());
passport.deserializeUser(UserCollection.deserializeUser());