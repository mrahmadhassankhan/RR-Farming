const AsyncHandler = require("express-async-handler");
const ContactUsModel = require("../../Models/AdminModel/ContactUsModel");

const postcontactus = AsyncHandler(async (req, res) => {
    const { name, email, subject, message, } = req.body;
    console.log(name, email, subject, message,)
    try {
        const existingCategory = await ContactUsModel.findOne({ email });
        if (existingCategory) {
            return res.status(400).json("Category Already Exists");
        }

        await ContactUsModel.create({
            name, email, subject, message,
        });

        res.status(201).json("Successfully Added Category Product");
    } catch (error) {
        console.error("Error adding category:", error);
        res.status(500).json("Error adding category");
    }
});

const getcontactus = AsyncHandler(async (req, res) => {
    const contactus = await ContactUsModel.find();
    res.status(200).json(contactus);
});

module.exports = { postcontactus, getcontactus };
