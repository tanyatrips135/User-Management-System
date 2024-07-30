const USERS_PER_PAGE = 8;

const fs = require('fs');
let rawdata = fs.readFileSync('users.json');
let users = JSON.parse(rawdata);
// console.log(users);

getUsers = (req, res, next) => {
    const page = req.query.page;
    let numOfPages = Math.ceil(users.length / USERS_PER_PAGE);
    if (!page) {
        res.status(200).json({pages: numOfPages, users: users});
    } else {
        const startingIndex = (page - 1) * USERS_PER_PAGE;
        res.status(200).json({pages: numOfPages, users: users.slice(startingIndex, startingIndex + USERS_PER_PAGE)});
    }
};


getUser = (req, res, next) => {
    const userId = +req.params.userId;
    // console.log(userId);
    const user = users.find((user) => user.id === userId);
    if (user) {
        res.json(user);
    } /*else {
        throw new Error("Invalid user id.");
    }*/
};

postUser = (req, res, next) => {
    const user = {
        id: Math.floor(Math.random() * 1000000),
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
    };
    if (user.name && user.email) {
        users.push(user);
        res.status(201).json({
            message: "User added successfully.",
            user: user,
        });
    } else {
        throw new Error("Invalid arguments");
    }
};

deleteUser = (req, res, next) => {
    const userId = +req.params.userId;
    users = users.filter((user) => user.id !== userId);
    console.log(users);
    res.status(200).send({ message: "user was successfully deleted." });
};

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    postUser: postUser,
    deleteUser: deleteUser,
};
