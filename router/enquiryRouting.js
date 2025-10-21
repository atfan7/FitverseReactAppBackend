const express = require("express");
const enquiryRouting = express.Router();
const Enquiry = require("../model/enquiryModel");

enquiryRouting.post("/enquiries", async (req, res) => {
    try {
        const enquiryData = new Enquiry(req.body);
        const result = await enquiryData.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

enquiryRouting.get("/enquiries", async (req, res) => {
    try {
        const result = await Enquiry.find();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

enquiryRouting.get("/enquiries/:eid", async (req, res) => {
    try {
        const eid = req.params.eid;
        const result = await Enquiry.findOne({ _id: eid });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

enquiryRouting.put("/enquiries/:eid", async (req, res) => {
    try {
        const eid = req.params.eid;
        const result = await Enquiry.updateOne({ _id: eid }, { $set: req.body });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

enquiryRouting.delete("/enquiries/:eid", async (req, res) => {
    try {
        const eid = req.params.eid;
        const result = await Enquiry.deleteOne({ _id: eid });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = enquiryRouting;
