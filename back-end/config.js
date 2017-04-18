module.exports.indexPage = 'public/index.html';

module.exports.db = {
    string: 'mongodb://localhost/efsite',
    testDb: 'mongodb://localhost/eftest',
    commonProps: {
        removed: {
            type: Boolean,
            default: false,
            required: true
        }
    }
};

module.exports.baseUrl = 'http://localhost:' + process.env.PORT || 3000;

module.exports.img = {
    maxSize: 50*1024*1024,
    supportedMimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    path: './storage',
    link: '/file'
};

module.exports.project = {
    paginateLimit: 70,
    dtoParams: '-removed'
};

module.exports.news = {
    paginateLimit: 70,
    dtoParams: '-removed'
};

module.exports.doc = {
    maxSize: 50*1024*1024,
    supportedMimeTypes: ['application/pdf', 'application/doc', 'application/xls', 'application/txt', 'image/png', 'image/jpg', 'image/jpeg'],
    path: './storage',
    link: '/file'
};

module.exports.smtp = {
    port: 25,
    password: 'bTrjvOzoHUnT',
    login: 'endowment@misis.ru',
    host: 'smtp.misis.ru',
    sender: '"Эндаумент-фщнд НИТУ МИСиС" <endowment@misis.ru>'
};

module.exports.ppsCreds = {
    login: 'pps12gpb3241',
    pass: 'TXYXcpTD8TaUZWT'
}
