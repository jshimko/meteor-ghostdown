/*
 * Set default Session var values
 */
Meteor.startup(function() {
  Session.setDefault('editor-markdown', null);
  Session.setDefault('editor-html', null);
  Session.setDefault('editor-word-count', null);
})

/*
 * Initialize the editor functionality
 */
Template.GhostEditor.rendered = function() {

  (function($, ShowDown, CodeMirror) {
    "use strict";

    $(function() {

      if (!document.getElementById('entry-markdown'))
        return;

      //var delay;
      var converter = new ShowDown.converter(),
        editor = CodeMirror.fromTextArea(document.getElementById('entry-markdown'), {
          mode: 'markdown',
          tabMode: 'indent',
          lineWrapping: true
        });

      // Really not the best way to do things as it includes Markdown formatting along with words

      function updateWordCount() {
        var wordCount = document.getElementsByClassName('entry-word-count')[0],
          editorValue = editor.getValue();

        if (editorValue.length) {
          var count = editorValue.match(/\S+/g).length;
          wordCount.innerHTML = count + (count === 1 ? ' word' : ' words');
          Session.set('editor-word-count', count);
        } else {
          wordCount.innerHTML = 'word count';
        }
      }

      function updatePreview() {
        var preview = document.getElementsByClassName('rendered-markdown')[0];
        var html = converter.makeHtml(editor.getValue());

        preview.innerHTML = html;
        Session.set('editor-html', html);

        updateWordCount();
      }

      $('.entry-markdown header, .entry-preview header').click(function(e) {
        $('.entry-markdown, .entry-preview').removeClass('active');
        $(e.target).closest('section').addClass('active');
      });

      editor.on("change", function() {
        Session.set('editor-markdown', editor.getValue());
        updatePreview();
      });

      updatePreview();

      // Sync scrolling

      function syncScroll(e) {
        // vars
        var $codeViewport = $(e.target),
          $previewViewport = $('.entry-preview-content'),
          $codeContent = $('.CodeMirror-sizer'),
          $previewContent = $('.rendered-markdown'),

          // calc position
          codeHeight = $codeContent.height() - $codeViewport.height(),
          previewHeight = $previewContent.height() - $previewViewport.height(),
          ratio = previewHeight / codeHeight,
          previewPostition = $codeViewport.scrollTop() * ratio;

        // apply new scroll
        $previewViewport.scrollTop(previewPostition);
      }

      // TODO: Debounce
      $('.CodeMirror-scroll').on('scroll', syncScroll);

      // Shadow on Markdown if scrolled
      $('.CodeMirror-scroll').scroll(function() {
        if ($('.CodeMirror-scroll').scrollTop() > 10) {
          $('.entry-markdown').addClass('scrolling');
        } else {
          $('.entry-markdown').removeClass('scrolling');
        }
      });
      // Shadow on Preview if scrolled
      $('.entry-preview-content').scroll(function() {
        if ($('.entry-preview-content').scrollTop() > 10) {
          $('.entry-preview').addClass('scrolling');
        } else {
          $('.entry-preview').removeClass('scrolling');
        }
      });
    });
  }(jQuery, Showdown, CodeMirror));
};


Template.GhostEditor.destroyed = function () {
  Session.set('editor-markdown', null);
  Session.set('editor-html', null);
  Session.set('editor-word-count', null);
};