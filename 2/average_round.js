//求兩個數字的平均值--四捨五入法*
//封裝average()函數，接口為average_round.average()
 (function(){
    average_round = {
        average: average
    };
    function average(a,b){
        return Math.round((a+b)/2);
    }
})()
