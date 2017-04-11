'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
      airport = new Airport();
      plane = new Plane();
  });

  it('Planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('Planes can be instructed to take off', function(){
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.takeOff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});
