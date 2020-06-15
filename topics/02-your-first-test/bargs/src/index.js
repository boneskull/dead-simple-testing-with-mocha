/**
 * Parses arguments and returns an object.
 * @param {string[]|BargsOptions} [argv] - Array of arguments to parse; defaults to `process.argv.slice(2)`. Can also be a `BargsOptions` object.
 * @param {BargsOptions} [opts] - Options
 */
exports.parse = (argv = process.argv.slice(2), opts = {expectsValue: []}) => {
  if (!Array.isArray(argv)) {
    opts = argv;
    argv = process.argv.slice(2);
  }
  let expectsValue = new Set(opts.expectsValue || []);
  const result = {_: []};
  let pos = 0;
  while (true) {
    let arg = argv[pos];
    if (arg === undefined) {
      return result;
    }
    if (arg.startsWith('-')) {
      if (arg === '--') {
        result._ = [...result._, ...argv.slice(++pos)];
        return result;
      }
      arg = arg.replace(/^-+/, '');
      result[arg] = expectsValue.has(arg) ? argv[++pos] : true;
    } else {
      result._ = [...result._, arg];
    }
    pos++;
  }
}

/**
 * Options for `bargs`.
 * @typedef {Object} BargsOptions
 * @property {string[]} expectsValue - Array of command-line options that should be followed by a value
 */

 /**
  * @typedef {Object} BargsArgs
  * @property {string[]} _ - Array of positional arguments
  */
