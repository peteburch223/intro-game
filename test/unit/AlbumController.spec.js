describe('AlbumController', function() {
  beforeEach(module('introGame.albumController'));

  var SongFetcherService, stateMock;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller, $q) {
   deferred = $q.defer();
   SongFetcherService = jasmine.createSpyObj('SongFetcherService', ['getAlbum', 'nextSong']);
   SongFetcherService.getAlbum.and.returnValue($q.when(""));
   stateMock = jasmine.createSpyObj('$state spy', ['go']);
   scope = $rootScope;

   ctrl = $controller('AlbumController', {
     SongFetcherService: SongFetcherService,
     $state: stateMock
   });

 }));

  it('stores album data in an array', function() {
    expect(ctrl.albums).toBeDefined();
    ctrl.loadAlbum(album1);
    expect(ctrl.albums[0]).toEqual(album1);
  });

  describe('#loadSongToGuess', function() {
    beforeEach(function(){
      ctrl.loadSongToGuess(albumID);
      scope.$apply();
    });

    it('calls songFetcherService.getAlbum', function() {
      expect(SongFetcherService.getAlbum).toHaveBeenCalled();
    });

    it('calls songFetcherService.nextSong', function() {
      expect(SongFetcherService.nextSong).toHaveBeenCalled();
    });

    it('calls ctrl.changeToSongState', function() {
      expect(stateMock.go).toHaveBeenCalledWith('song',{});
    })
  });
});
