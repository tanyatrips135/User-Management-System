const userModel = require("../models/users");
const USERS_PER_PAGE = 8;


getUsers = (req, res, next) => {
    const page = req.query.page;
    if (!page) {
        userModel
            .find({})
            .then((users) =>
                userModel
                    .countDocuments()
                    .then((count) =>
                        res.json({ pages: Math.ceil(count / USERS_PER_PAGE), users: users })
                    )
            );
    } else {
        userModel
            .find({})
            .skip((page - 1) * USERS_PER_PAGE)
            .limit(USERS_PER_PAGE)
            .then((users) =>
                userModel
                    .countDocuments()
                    .then((count) =>
                        res.json({ pages: Math.ceil(count / USERS_PER_PAGE), users: users })
                    )
            );
    }
};


getUser = (req, res, next) => {
    const userId = +req.params.userId;
    userModel.find({ id: userId }).then((user) => res.json(user));
};


postUser = (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
        id: Math.floor(Math.random() * 1000000),
    };
    if (user.name && user.email) {
        userModel
            .create(user)
            .then(() =>
                res.status(201).json({
                    message: "User added successfully.",
                    user: user,
                })
            )
            .catch((err) => res.json(err));
    } else {
        throw new Error("Invalid arguments");
    }
};


deleteUser = (req, res, next) => {
    const userId = +req.params.userId;
    userModel
        .deleteOne({ id: userId })
        .then((status) => res.json(status))
        .catch((err) => res.json(err));
};


module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    postUser: postUser,
    deleteUser: deleteUser,
};
