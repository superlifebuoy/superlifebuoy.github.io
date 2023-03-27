
  (function (d) {
    
      var q = ["injectTrack"];
      if(!q.every){return;}
      var r = q.every(function(keywords){
        return location.search.indexOf(keywords)>=0;
      });
      if(!r){return;}      
      
    var t = d.createElement("script");
    t.type = "text/javascript";
    t.src = "//g.alicdn.com/BigDipper/diagnosis/js/track.js";
    t.setAttribute("crossorigin", "");
    d.getElementsByTagName("head")[0].appendChild(t);
  })(document);