Package.describe({
     name: "jeremy:ghostdown",
     summary: "A split-pane Markdown editor by the fine folks at Ghost.org",
     version: '0.1.0',
     git: 'https://github.com/jshimko/meteor-ghostdown'
});

Package.onUse(function (api) {

    api.versionsFrom("METEOR@0.9.0");

    api.use('jquery', 'client');

    api.addFiles([
        'ghost-markdown-editor/ghostdown.css',
        'ghost-markdown-editor/ghostdown.js',
        ], 'client');

    api.export('CodeMirror');

});
