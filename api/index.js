var router = require('express').Router();

router.get('/companies/list', function (req, res, next) {
    var fake = [
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
        {name:"ПАО \"Газпром\"",chief:"Миллер Алексей Борисович",inn:"7736050003",address:"117420, Город Москва, Улица Намёткина, дом 16",indexCredit:1},
    ];
    res.send(fake);
});
router.post('/navbar', function (req, res, next) {
    var fake = [
        {name:"Услуга1",url:"/somepath"},
        {name:"Услуга2",url:"/somepath"},
        {name:"Услуга3",url:"/somepath"},
        {name:"Услуга4",url:"/somepath"},
        {name:"Услуга5",url:"/somepath"},
    ];
    res.send(fake)
});
router.post('/test3', function (req, res, next) {
    res.send({test3: 3})
});

module.exports = router;