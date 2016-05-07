describe('AnswerController', function () {
  beforeEach(module('introGame.answerController'));

  var ctrl;

  beforeEach(inject(function($controller){
    SongFetcherService = jasmine.createSpyObj('SongFetcherService', ['nextSong', 'currentSong']);

    stateMock = jasmine.createSpyObj('$state spy', ['go']);

    ctrl = $controller('AnswerController', { SongFetcherService: SongFetcherService,
    $state: stateMock


  });

}));

  xit('calls songFetcherService.currentSong', function() {
    ctrl.currentSong()
    expect(SongFetcherService.currentSong).toHaveBeenCalled();
  });

  describe('#loadSongToGuess', function() {
    beforeEach(function(){
      ctrl.loadSongToGuess();
    });

    it('calls songFetcherService.nextSong', function() {
      expect(SongFetcherService.nextSong).toHaveBeenCalled();
    });

    it('calls state.go with song', function() {
      expect(stateMock.go).toHaveBeenCalledWith('song',{});
    });

  });

  it('calls state.go with albums', function() {
    ctrl.changeToAlbumsState()
    expect(stateMock.go).toHaveBeenCalledWith('albums',{});
  });


});
