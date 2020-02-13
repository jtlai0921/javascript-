//求兩個數字的平均值--向下取整計算*
//封裝average()函數，接口為average_floor.average()*
(function(){
    average_floor = {
        average: average
    };
    function average(a, b){
        return Math.floor((a + b) / 2);
    }
})()
