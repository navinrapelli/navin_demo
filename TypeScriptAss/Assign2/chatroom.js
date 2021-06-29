var chat1user = ['navin', 'narsing', 'venky'];
var messe = new Set();
var chat2user = ['ashish', 'rohan', 'naga'];
var messe1 = new Set();
var chat1 = function (token, mess) {
    if (token <= 2) {
        var messageschat1 = new Map();
        messageschat1.set(chat1user[token], mess);
        console.log(messageschat1);
    }
    else {
        console.log("ur token not mathced");
    }
    messe.add(mess);
};
var chat2 = function (token, mess) {
    if (token <= 2) {
        var messageschat2 = new Map();
        messageschat2.set(chat2user[token], mess);
        console.log(messageschat2);
    }
    else {
        console.log("ur token not mathced");
    }
    messe1.add(mess);
};
