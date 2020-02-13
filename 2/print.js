function print(v){
    if(typeof v == "number"){
        var w = 40;
        if(n > 30) w = (n - 30) + 40;
        var s = '<span style="padding:4px 2px;display:inline-block;text-align:center;width:'+ w +'px;">' + v + '</span>';
        document.write(s);
    }
    else{
        document.write(v);
    }
}
