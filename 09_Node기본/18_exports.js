exports.randInt = function randInt(from, to) {
    return Math.floor(Math.random() * (to-from+1) + from)
}

exports.areaCircle = function(radius) {
    return Math.PI * radius * radius;
}