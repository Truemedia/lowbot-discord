const stripMentions = require('strip-mentions');
const {Nlu} = require('hightech').Request;

class NluRequest extends Nlu
{
  constructor(data)
  {
    super(data);
  }

  get author()
  {
    let {id, username} = this.data.author;
    return {id, username};
  }

  get channel()
  {
    let {id, name} = this.data.channel;
    return {id, name};
  }

  get content()
  {
    return stripMentions( this.data.content.toString() );
  }

  get mentions()
  {
    return this.data.mentions.users.keyArray()
  }
}

module.exports = NluRequest;
