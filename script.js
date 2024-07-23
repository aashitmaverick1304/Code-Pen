function run(){
    let htmlbox=document.getElementById("html-code").value;
    let cssbox=document.getElementById("css-code").value;
    let jsbox=document.getElementById("javascript-code").value;
    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlbox + "<style>"+cssbox+"</style>"
    output.contentWindow.eval(jsbox)
}