//commonJS module
module.exports.Question = function( args ) {
  this.questionId = args[0];
  this.sentence = args[1];
  this.options = new Options(args[2]);
  this.getCorrectAnswer = function () {
    for (let opt in this.options.opts) {
      if(this.options.opts[opt].isCorrect)
        return opt;
    }
  }
}

const Options = function( opts ) {
  this.opts = opts;
}

/*opts format:
  {text:'string', isCorrect: 'boolean'}
*/