;(window.webpackJsonp = window.webpackJsonp || []).push([
  [104],
  {
    1613: function (module, exports) {
      module.exports = function (hljs) {
        return {
          subLanguage: 'xml',
          contains: [
            { className: 'meta', begin: '^__(END|DATA)__$' },
            { begin: '^\\s*%{1,2}={0,2}', end: '$', subLanguage: 'perl' },
            {
              begin: '<%{1,2}={0,2}',
              end: '={0,1}%>',
              subLanguage: 'perl',
              excludeBegin: !0,
              excludeEnd: !0,
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_mojolicious.c66589cf6fda73011627.bundle.js.map
