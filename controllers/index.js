
const AboutRights = require("../models/about");
const AnnounceRights = require("../models/announce_rights");


exports.indexView = (req, res) => res.render("landing");

exports.homeView = async (req, res) => {
    try {
        const AboutData = await AboutRights.findOne({});
        const AnnouncementData = await AnnounceRights.find().sort({ creation: -1 });

        
        return res.render("home", {  about: AboutData, announcements: AnnouncementData })
    } catch (err) {

        console.log(err);
        return res
            .status(424)
            .json({ status: "Failed", message: "Request failed" });
    }
};