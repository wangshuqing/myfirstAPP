//2014-7-7
   function Translate(lng,lat,translateCallback)
   {
	     var url="http://api.map.baidu.com/geoconv/v1/?coords="+lng+","+lat+"&from=1&to=5&ak=WZZCdjry5vdrtFtdVGE3c44e"
	   	 $.ajax({
	     url:url,
		 type:'GET',
		 timeout:10000,
		 dataType:'jsonp',
		 jsonp: "callback",//服务端用于接收callback调用的function名的参数
         jsonpCallback:"success_jsonpCallback",//callback的function名称
		 success:function(data){
			 
		     var result=data.result[0];
			 //var point=new BMap.Point(result.x,result.y);
			 translateCallback(result);
		 },
		 error:function(XMLHttpRequest, textStatus, errorThrow)
		 {
			 alert("error:  "+textStatus);
		 }
	  });
   }


// JavaScript Document
//2011-7-25
/*
(function(){        //闭包
function load_script(xyUrl, callback){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = xyUrl;
    //借鉴了jQuery的script跨域方法
    script.onload = script.onreadystatechange = function(){
        if((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
            callback && callback();
            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;
            if ( head && script.parentNode ) {
                head.removeChild( script );
            }
        }
    };
    // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
    head.insertBefore( script, head.firstChild );
}
function translate(point,type,callback){
    var callbackName = 'cbk_' + Math.round(Math.random() * 10000);    //随机函数名
 //   var xyUrl="http://api.map.baidu.com/geoconv/v1/?coords=114.21892734521,29.575429778924&from=1&to=5&ak=WZZCdjry5vdrtFtdVGE3c44e"+"&callback=BMap.Convertor." + callbackName;
	
    var xyUrl = "http://api.map.baidu.com/ag/coord/convert?from="+ type + "&to=4&x=" + point.lng + "&y=" + point.lat + "&callback=BMap.Convertor." + callbackName;
    //动态创建script标签
    load_script(xyUrl);
    BMap.Convertor[callbackName] = function(xyResult){
        delete BMap.Convertor[callbackName];    //调用完需要删除改函数
        var point = new BMap.Point(xyResult.x, xyResult.y);
        callback && callback(point);
    }
}

window.BMap = window.BMap || {};
BMap.Convertor = {};
BMap.Convertor.translate = translate;
})();
*/