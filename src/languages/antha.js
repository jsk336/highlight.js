/*
Language: Antha
Author: Sean Ward <sward@synthace.com>
Contributors: Stephan Kountso aka StepLg <steplg@gmail.com, Evgeny Stepanischev <imbolk@gmail.com>
Description: Antha language. For info about language see http://www.go-lang.org/
*/

function(hljs) {
  var ANTHA_KEYWORDS = {
    keyword:
      'break default func interface select case map struct chan else goto switch ' +
      'const fallthrough if range type continue for import return var go defer ' +
	  'protocol|10 Parameters Data Inputs Requirements Setup Steps Outputs Analysis Validation',
    constant:
       'true false iota nil',
    typename:
      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
      'uint16 uint32 uint64 int uint uintptr rune',
    built_in:
      'append cap close complex copy imag len make new panic print println real recover delete'
  };
  return {
    aliases: ["antha"],
    keywords: ANTHA_KEYWORDS,
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'', end: '[^\\\\]\''
      },
      {
        className: 'string',
        begin: '`', end: '`'
      },
      {
        className: 'number',
        begin: '[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?',
        relevance: 0
      },
      hljs.C_NUMBER_MODE
    ]
  };
}
