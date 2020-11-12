var clock = new Image();
clock.src = "img/x96/Clock.png";
var clockm = new Image();
clockm.src = "img/x144/Clock.png";

var contacts = new Image();
contacts.src = "img/x96/Contacts.png";
var contactsm = new Image();
contactsm.src = "img/x144/Contacts.png";

var dic = new Image();
dic.src = "img/x96/Dictionary.png";
var dicm = new Image();
dicm.src = "img/x144/Dictionary.png";

var dow = new Image();
dow.src = "img/x96/Downloads.png";
var dowm = new Image();
dowm.src = "img/x144/Downloads.png";

var equal = new Image();
equal.src = "img/x96/Equalizer.png";
var equalm = new Image();
equalm.src = "img/x144/Equalizer.png";

var trans = new Image();
trans.src = "img/x96/Tranlate.png";
var transm = new Image();
transm.src = "img/x144/Tranlate.png";

function mudarContacts(){
    window.document['home'].src = contactsm.src;
    window.document['contatos'].src = contactsm.src;
}

function mudarDic(){
    window.document['home'].src = dicm.src;
    window.document['dicionario'].src = dicm.src;
}

function mudarDownl(){
    window.document['home'].src = dowm.src;
    window.document['down'].src = dowm.src;
}

function mudarEqual(){
    window.document['home'].src = equalm.src;
    window.document['equa'].src = equalm.src;
}

function mudarTran(){
    window.document['home'].src = transm.src;
    window.document['transl'].src = transm.src;
}

function mudarClock(){
    window.document['home'].src = clockm.src;
    window.document['relogio'].src = clockm.src;
}