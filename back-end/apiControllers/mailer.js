var sendEmail = require('./common').sendEmail;

module.exports.sendConfirmationEmail = function (email, name, token, cb) {
    sendEmail({
        to: email,
        subject: 'Подтверждение почты',
        text: 'Спасибо за вашу заявку, ' + name + ',  перейдя по этой ссылке, вы сможете авторизоваться на нашем сайте и отслеживать состяние пожертвования, а также список ваших приятных бонусов: ' + token
    }, cb)
};