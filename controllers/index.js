
const AboutRights = require("../models/about");
const EventRights = require("../models/event");


exports.indexView = (req, res) => res.render("landing");

exports.homeView = async (req, res) => {
    try {
        const AboutData = await AboutRights.findOne({});
        const AnnounceData = await EventRights.find().sort({ creation: -1 });

        
        return res.render("home", {  about: AboutData, announcements: AnnounceData })
    } catch (err) {

        console.log(err);
        return res
            .status(424)
            .json({ status: "Failed", message: "Request failed" });
    }
};