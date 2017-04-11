var Airport = function() {};
  var planes = [];

Airport.prototype.landPlane = function (plane) {
  planes.push(plane);
};
