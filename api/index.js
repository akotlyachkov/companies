const router = require('express').Router();

router.post('/companies/search', function (req, res, next) {
    let fake = [
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
        {name: "ПАО \"Газпром\"", chief: "Миллер Алексей Борисович", inn: "7736050003", address: "117420, Город Москва, Улица Намёткина, дом 16", indexCredit: 1},
    ];
    res.send(fake);
});
router.post('/companies/count', function (req, res, next) {
    res.send({count: 120});
});

router.post('/ichp/search', function (req, res, next) {
    let fake = [
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"},
        {name: "Чепуляева Олеся Сергеевна", inn: "252401331586", ogrnip: "316250900053325", okved: "Предоставление услуг парикмахерскими и салонами красоты, 96.02", status: "Актуальный"}

    ];
    res.send(fake);
});
router.post('/ichp/count', function (req, res, next) {
    res.send({count: 230});
});

router.post('/navbar', function (req, res, next) {
    let fake = [
        {name: "Работа", link: "http://integrum.ru"},
        {name: "Лента", link: "http://integrum.ru"},
        {name: "Архив СМИ", link: "http://integrum.ru"},
        {name: "Анализ СМИ", link: "http://integrum.ru"},
        {name: "Соцмедиа", link: "http://integrum.ru"},
        {name: "Компании", link: "http://localhost:3001/companies"},
        {name: "Тендеры", link: "http://integrum.ru"},
    ];
    res.send(fake)
});
router.post('/features', function (req, res, next) {
    let fake = [
        {name: "Поиск связей", link: "http://integrum.ru", icon: 'fa-link'},
        {name: "Трансферное ценообразование", link: "http://integrum.ru", icon: 'fa-bar-chart'}
    ];
    res.send(fake)
});

router.post('/test3', function (req, res, next) {
    res.send({test3: 3})
});

router.post('/persons/history', function (req, res, next) {
    let fake = {};
    res.send({test3: 3})
});
router.post('/config', function (req, res, next) {
    let fake = {
        urlAppNavigator: 'navigator.integrum.ru'
    };
    setTimeout(() => res.send(fake), 100);

});

module.exports = router;