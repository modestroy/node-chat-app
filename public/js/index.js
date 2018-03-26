var socket = io();

socket.on('connect', function (){
    console.log('Connected to server');

});

socket.on('newMessage', function (message) {
   console.log('message', message);
});

socket.on('disconnect', function (){
    console.log('disconnected from server');
});

socket.emit('createMessage', {
    from: 'SomeCreep',
    text: 'Hi!'
}, function () {
    console.log('Got it');
});