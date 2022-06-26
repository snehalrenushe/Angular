express = require('express');

eobj = express();

port = 5100;

function MarvellousConnect(request,response)
{
    console.log("Marvellous server is live at port "+port);
}

eobj.listen(port,MarvellousConnect);

function MarvellousRoot(request,response)
{
    response.json({"Status":"Success"});
}

eobj.get('/',MarvellousRoot);

function MarvellousBatches(request,response)
{
    response.json({"PPA":"4 Months","Python":"3 Months","Angular":"5 Months"});
}

eobj.get('/getBatches',MarvellousBatches);

function MarvellousAdmin(request,response)
{
    response.json({"Mobile":"8425921120","Website":"www.snehal.com"});
}

eobj.get('/getAdmin',MarvellousAdmin);