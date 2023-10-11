const {
    getUsersHandler,
    getSingleUserHandler,
    postUsersHandler,
} = require("../controllers/user");

const router = exports.Router();

router.get("/", getUsersHandler);
router.post("/", postUsersHandler);
router.get("/:userId", getSingleUserHandler);

module.exports = router;
