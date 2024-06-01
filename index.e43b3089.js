var r,t=document.querySelector("ul"),e=function(r){return+r.slice(1).replace(",","")};(r=Array.from(t.children)).sort(function(r,t){return e(t.getAttribute("data-salary"))-e(r.getAttribute("data-salary"))}),r.forEach(function(r){return t.appendChild(r)});
//# sourceMappingURL=index.e43b3089.js.map
