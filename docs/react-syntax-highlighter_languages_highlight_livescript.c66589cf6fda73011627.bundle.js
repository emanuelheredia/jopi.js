;(window.webpackJsonp = window.webpackJsonp || []).push([
  [93],
  {
    1600: function (module, exports) {
      module.exports = function (hljs) {
        var KEYWORDS = {
            keyword:
              'in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf',
            literal: 'true false null undefined yes no on off it that void',
            built_in: 'npm require console print module global window document',
          },
          JS_IDENT_RE = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*',
          TITLE = hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE }),
          SUBST = {
            className: 'subst',
            begin: /#\{/,
            end: /}/,
            keywords: KEYWORDS,
          },
          SUBST_SIMPLE = {
            className: 'subst',
            begin: /#[A-Za-z$_]/,
            end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
            keywords: KEYWORDS,
          },
          EXPRESSIONS = [
            hljs.BINARY_NUMBER_MODE,
            {
              className: 'number',
              begin:
                '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
              relevance: 0,
              starts: { end: '(\\s*/)?', relevance: 0 },
            },
            {
              className: 'string',
              variants: [
                { begin: /'''/, end: /'''/, contains: [hljs.BACKSLASH_ESCAPE] },
                { begin: /'/, end: /'/, contains: [hljs.BACKSLASH_ESCAPE] },
                {
                  begin: /"""/,
                  end: /"""/,
                  contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE],
                },
                {
                  begin: /"/,
                  end: /"/,
                  contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE],
                },
                { begin: /\\/, end: /(\s|$)/, excludeEnd: !0 },
              ],
            },
            {
              className: 'regexp',
              variants: [
                {
                  begin: '//',
                  end: '//[gim]*',
                  contains: [SUBST, hljs.HASH_COMMENT_MODE],
                },
                { begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ },
              ],
            },
            { begin: '@' + JS_IDENT_RE },
            {
              begin: '``',
              end: '``',
              excludeBegin: !0,
              excludeEnd: !0,
              subLanguage: 'javascript',
            },
          ]
        SUBST.contains = EXPRESSIONS
        var PARAMS = {
          className: 'params',
          begin: '\\(',
          returnBegin: !0,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              keywords: KEYWORDS,
              contains: ['self'].concat(EXPRESSIONS),
            },
          ],
        }
        return {
          aliases: ['ls'],
          keywords: KEYWORDS,
          illegal: /\/\*/,
          contains: EXPRESSIONS.concat([
            hljs.COMMENT('\\/\\*', '\\*\\/'),
            hljs.HASH_COMMENT_MODE,
            {
              className: 'function',
              contains: [TITLE, PARAMS],
              returnBegin: !0,
              variants: [
                {
                  begin:
                    '(' +
                    JS_IDENT_RE +
                    '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?',
                  end: '\\->\\*?',
                },
                {
                  begin:
                    '(' +
                    JS_IDENT_RE +
                    '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?',
                  end: '[-~]{1,2}>\\*?',
                },
                {
                  begin:
                    '(' +
                    JS_IDENT_RE +
                    '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?',
                  end: '!?[-~]{1,2}>\\*?',
                },
              ],
            },
            {
              className: 'class',
              beginKeywords: 'class',
              end: '$',
              illegal: /[:="\[\]]/,
              contains: [
                {
                  beginKeywords: 'extends',
                  endsWithParent: !0,
                  illegal: /[:="\[\]]/,
                  contains: [TITLE],
                },
                TITLE,
              ],
            },
            {
              begin: JS_IDENT_RE + ':',
              end: ':',
              returnBegin: !0,
              returnEnd: !0,
              relevance: 0,
            },
          ]),
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_livescript.c66589cf6fda73011627.bundle.js.map
