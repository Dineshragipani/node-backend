import express from "express"
import {newOrder} from ""
import router from "./productRoute"
const Router =express.Router()
Router.post("/neworder",newOrder)
export router