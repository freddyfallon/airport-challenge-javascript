describe('Airport', function(){
  var airport;
  beforeEach(function(){
      airport = new Airport()
      jasmine.createSpy(plane);
  });

  describe('Plane is able to', function(){

    it('land in the airport', function(){
      airport.landPlane(plane);
      expect(airport.planes).toContain(plane);
    });

  });

});
