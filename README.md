# Fork
I forked this package from [jshimko:meteor:ghostdown](https://github.com/jshimko/meteor-ghostdown) and changed the following:
- feature: load content from template param ( {{> GhostEditor 'preload this'}} )
- show an info icon (fontawesome :/) which links to a markdown cheatsheet
- add editor styling from Ghost-UI css

Because my PR [#12](https://github.com/jshimko/meteor-ghostdown/pull/12) was left unanswered I decided to publish the package on my own.


# Ghostdown - A Markdown editor with live preview and word count.

All credit for the development of the editor functionality goes to the fine folks at [Ghost.org](http://ghost.org) and a few other great open source projects (like [CodeMirror](http://codemirror.net) and [Showdown](https://github.com/coreyti/showdown)).

Live demo:  http://ghostdown.meteor.com  ([source](https://github.com/jshimko/meteor-ghostdown-demo))

## Install

`meteor add jeremy:ghostdown`

## About

This is an attempt at cloning the split-pane Markdown editor functionality that is available in the [Ghost blogging platform](http://ghost.org).  The template that will render is actually based directly on [the .hbs template used in Ghost itself](https://github.com/TryGhost/Ghost/blob/master/core/client/templates/editor/edit.hbs).  All you need to do to import it is:

`{{> GhostEditor}}`

That will give you the following template:

```html
<template name="GhostEditor">

  <!-- Markdown Pane -->
  <section class="entry-markdown active">
    <header class="floatingheader" id="entry-markdown-header">
      <small>Markdown</small>
    </header>
    <section id="entry-markdown-content" class="entry-markdown-content">
      <textarea id="entry-markdown"></textarea>
    </section>
  </section>

  <!-- Rendered HTML Pane -->
  <section class="entry-preview">
    <header class="floatingheader" id="entry-preview-header">
      <small>Preview
        <span class="entry-word-count js-entry-word-count">Word count</span>
      </small>
    </header>
    <section class="entry-preview-content">
      <div class="rendered-markdown"></div>
    </section>
  </section>

</template>

```

You can then reactively get the values for the markdown, HTML, and word count with the following session variables.

```javascript
Session.get('editor-markdown');
Session.get('editor-html');
Session.get('editor-word-count'); 
```

## Demo

See [the demo](http://ghostdown.meteor.com).  Click in the markdown pane and start typing.  You should see the magic begin to happen immediately.  Note that this package is completely unstyled.  All styling is added in the demo app ([see source](https://github.com/jshimko/meteor-ghostdown-demo)).  It's up to you to style the editor and code up whatever logic you want to happen with the Markdown content. However, the live preview, synchronized scrolling, and word count functionality works right out of the box just by adding the package to your app and importing the template.

If you're fond of the Ghost platform back-end UI, I highly recommend poking around in the main Ghost repo for some [templates](https://github.com/TryGhost/Ghost/tree/master/core/client/templates) and the Ghost-UI repo for the associated [styles](https://github.com/TryGhost/Ghost-UI/tree/master/sass).  It's a great way to build a nice looking modular UI without writing everything from scratch.  Hooray open source!

## Future

I may eventually add more functionality or some default styles to this package, but the current state satisfies what I needed for my project.  Contributions are welcome though!
