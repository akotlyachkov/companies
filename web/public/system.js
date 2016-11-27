var packages = {
    'app': {'defaultExtension': 'js'}
};

var ng2PackageNames = [
    'common', 'router', 'compiler', 'core', 'forms', 'http', 'platform-browser', 'platform-browser-dynamic', /*'testing', 'upgrade'*/
];

ng2PackageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
});

System.config({
    transpiler: false,
    defaultJSExtensions: true,

    packages: packages,

    paths: {'npm:*': 'node_modules/*'},

    map: {
        'moment': 'node_modules/moment/moment.js',
        'ng2-bootstrap/ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
        '@angular': 'npm:@angular',
        'rxjs': 'npm:rxjs'
    }
});

System.import('start.js');