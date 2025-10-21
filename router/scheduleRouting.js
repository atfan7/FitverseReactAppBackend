const express = require("express");
const scheduleRouting = express.Router();
const Schedule = require("../model/scheduleModel");

scheduleRouting.post("/schedules", async (req, res) => {
    try {
        const scheduleData = new Schedule(req.body);
        const result = await scheduleData.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

scheduleRouting.get("/schedules", async (req, res) => {
    try {
        const result = await Schedule.find();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

scheduleRouting.get("/schedules/:sid", async (req, res) => {
    try {
        const sid = req.params.sid;
        const result = await Schedule.findOne({ _id: sid });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

scheduleRouting.put("/schedules/:sid", async (req, res) => {
    try {
        const sid = req.params.sid;
        const result = await Schedule.updateOne({ _id: sid }, { $set: req.body });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

scheduleRouting.delete("/schedules/:sid", async (req, res) => {
    try {
        const sid = req.params.sid;
        const result = await Schedule.deleteOne({ _id: sid });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = scheduleRouting;
