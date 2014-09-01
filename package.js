Package.describe({
     name: "jeremy:ghostdown",
     summary: "A split-pane Markdown editor by the fine folks at Ghost.org",
     version: '0.1.2',
     git: 'https://github.com/jshimko/meteor-ghostdown.git'
});

Package.onUse(function (api) {

    api.versionsFrom("METEOR@0.9.0");

    api.use([
        'jquery'
        ], 'client');

    api.addFiles([
        'ghost-markdown-editor/ghostdown.css',
        'ghost-markdown-editor/ghostdown.js',
        'ghost-markdown-editor/jquery.ghostdown.js',
        ], 'client');

    if (api.export)
        api.export('CodeMirror');
});
