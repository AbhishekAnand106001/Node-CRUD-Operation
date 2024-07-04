const express = require("express")
const { handleGetAllUsesrs, getUserById, updateById, deleteById, createById } = require("../controllers/user")
const router = express.Router();

router.
    route("/")
    .get(handleGetAllUsesrs)
    .post(createById)

router
    .route("/:id")
    .get(getUserById)
    .patch(updateById)
    .delete(deleteById)


module.exports = router;