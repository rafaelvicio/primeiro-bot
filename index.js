var TelegramBot = require( 'node-telegram-bot-api' );

var TOKEN = '373045955:AAGdpCeqMogpkDgrdqjebqK5ZiV24vDifZU';

var bot = new TelegramBot( TOKEN, { polling: true } );

bot.on('message', function(msg){
  console.log('msg', msg);
});

var logErrorEcho = function logErrorEcho(msg) {
  return function (err) {
    return console.log(msg, err);
  };
};

var logSuccessEcho = function(msg, match){
  return function(data){
    console.log( 'Success:', data);
  };
};

var sendEcho = function(msg, match){
  bot.sendMessage( msg.chat.id, match[ 1 ] )
      .then( logSuccessEcho( msg, match ) )
      .catch( logErrorEcho( 'Error:') );
};

bot.onText( /\/echo (.*)/, sendEcho);
