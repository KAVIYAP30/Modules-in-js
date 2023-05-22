exports.addition=function(a,b){
    return a+b;
}
exports.subtration=function(a,b){
    return a-b;
}
exports.multiplication=function(a,b){
    return a*b;
}
exports.division=function(a,b){
    return a/b;
}
exports.power=function(a,b){
    return a**b;
}
exports.date=function(){
    return Date();
}
exports.upper=function(){
    var str="welcome to nodejs";
    return str.toLocaleUpperCase();
}
exports.lower=function(){
    var str="WELCOME TO NODEJS";
    return str.toLocaleLowerCase();
}
exports.square=function(a){
    var value=Math.sqrt(a);
    return value;
}
exports.tangent=function(a){
    var  value1=Math.tan(a);
    return value1;
}
exports.roundof=function(a){
    var  value2=Math.round(a);
    return value2;
}
exports.ran=function(){
    var  value1=Math.random();
    return value1;
}
exports.logval=function(a){
    var  value3=Math.log(a);
    return value3;
}
