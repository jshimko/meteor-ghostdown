Package.describe({
     name: "jeremy:ghostdown",
     summary: "A split-pane Markdown editor by the fine folks at Ghost.org",
     version: '0.2.1',
     git: 'https://github.com/jshimko/meteor-ghostdown.git'
});

Package.onUse(function (api) {

    api.versionsFrom("METEOR@0.9.0");

    api.use([
        'jquery',
        'templating'
        ], 'client');

    api.addFiles([
        'lib/client/vendor/codemirror.js',
        'lib/client/vendor/showdown.js',
        'lib/client/codemirror-markdown.js',
        'lib/client/ghostdown.html',
        'lib/client/ghostdown.js'
        ], 'client');
});
