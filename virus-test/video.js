var {Filter} = require("../index");

var filter = new Filter(process.env.Key);

filter.get("https://media.discordapp.net/attachments/1026208224036261939/1031258331345604719/Fire.gif", { video: true }).then(function(result) {
    console.log(result);
}).catch(function(error) {
    var censoredError = error;
    censoredError.request._header = "<hidden>";
    console.error(censoredError);
    process.exit(1);
});