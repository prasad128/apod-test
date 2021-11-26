import express from "express";
import mongoose from "mongoose"

const apodSchema = new mongoose.Schema({
  copyright: String,
  date: String,
  explanation: String,
  title: String,
  url: String
})

const Apod = mongoose.model("Apod", apodSchema)
export default Apod