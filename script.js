var $output;
var $result;
var $html;
var myTimer;

var header = Array();
var css = Array();

header["default"] = "<html><head><title>HTML & CSS Live editor</title></head><body><div id='header'>HTML & CSS Live editor</div><div id='content'><p>Play with HTML and CSS ...</p></div></body></html>";
css["default"] =    'body,html {\n'+
                    '   background:0;\n'+
                    '   font-family:Verdana,Arial,sans;\n'+
                    '   font-size:21px;\n'+
                    '   margin:0; padding:0;\n'+
                    '}\n';

$(document).ready( function()
{
    $html = $("#htmloutput");
    $output = $("#cssoutput");
    $result = $("#result");

    $html.val(header["default"]);
    $output.val(css["default"]);

    $("#btnconvert").bind("click" , renderHTML);
    $("#btnconvert").trigger("click");

    $("#cssoutput,#htmloutput").keyup(d);
});
// function cssToggle()
// {
//     $("#wrapper").toggle();
// }
// function htmlToggle()
// {
//     $(".htmloutput").show();
//     $(".cssoutput").hide();
//     $("#togglehtml").addClass("active");
//     $("#togglecss").removeClass("active");
// }
// function cssToggle2()
// {
//     $("#togglehtml").removeClass("active");
//     $("#togglecss").addClass("active");
//     $(".cssoutput").show();
//     $(".htmloutput").hide();
// }
function d()
{
    clearInterval(myTimer);
    myTimer = setInterval(renderHTML , 250);
}
function renderHTML()
{
    var stamp = Math.random()*100000 + "";
    var str = stamp.substr(0,10);
    var htmlStr = $html.val();
    var fcss = $output.val();

    fcss = fcss.replace(/body,html/g, "#result").
                replace(/body /g, "#result").
                replace(/body\{/g, "#result{").
                replace(/html /g, "#result").
                replace(/html\{/g, "#result{");

    $("head style").text(fcss);
    var cont = htmlStr;.split("<body>")[1].split("</body>")[0].replace(/\$\.post/gi,'\\$\\.post').replace(/\$\.put/gi,'\\$\\.put').replace(/\$\.delete/gi,'\\$\\.delete').replace(/\$\.ajax/gi,'\\$\\.ajax');
    var tit = htmlStr;.split("<title>")[1].split("</title>")[0];

    $result.html(cont);
    $("title").text(tit);
}

