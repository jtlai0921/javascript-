var js = "script異步通訊之參數傳遞_serve.js";
var r = new RegExp(js + "(\\?(.*))?$");
var script = document.getElementsByTagName("script");

for (var i = 0; i < script.length; i ++ )
{
   var s = script[i];
   if(s.src && s.src.match(r))
   {
      var oo = s.src.match(r)[2];
      if (oo && (t = oo.match(/([^&=]+)=([^=&]+)/g)))
      {
         for (var l = 0; l < t.length; l ++ )
         {
            r = t[l];
            var c = r.match(/([^&=]+)=([^=&]+)/);
            if (c && (c[2]=="callback"))
            {
               var f = eval(c[2]);
               f("Hi，大家好，我是從服務器端過來的資訊使者.");
            }
         }
      }
   }
}
