//create fund detail
(function () {
    var Project = require('./db/mongoose').models.Project;
    var fund = new Project({
        name: 'бюджет фонда',
        direction: 'fund',
        need: 1000000000,
        given: 127000000
    })
})()

    //create admin 
(function () {
        require('./apiControllers/admin').create({
            body: {
                firstName: 'admin',
                lastName: 'admin',
                middleName: 'admin',
                email: 'admin@mail.ru',
                password: 'admin'
            }
        })
})()
