const User = require("../models/user")


async function handleGetAllUsesrs(req, res) {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
}

async function updateById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "Success" });
}

async function deleteById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: "Success" })
}

async function createById(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(404).json({ msg: "All fields are req..." });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    })

    return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
    handleGetAllUsesrs,
    getUserById,
    updateById,
    deleteById,
    createById
}