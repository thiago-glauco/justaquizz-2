//commonJS module
module.exports.Question = function( args ) {
  this.questionId = args[0];
  this.sentence = args[1];
  this.options = new Options(args[2]);
}

const Options = function( opts ) {
  this.opts = opts;
}

/*opts format:
  {text:'string', isCorrect: 'boolean'}
*/