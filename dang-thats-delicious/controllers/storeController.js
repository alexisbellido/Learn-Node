exports.myMiddleware = (req, res, next) => {
};

exports.homePage = (req, res) => {
    res.render('index');
    // res.render('hello', {
    //     title: "Hello test",
    //     name: "Joe",
    //     dog: "Buddy",
    // });
};