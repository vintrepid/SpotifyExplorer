SpotifyExplorer.SearchResultsRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('search', params.id).then(function(search) {
            var url = "https://ws.spotify.com/search/1/track.json?q=" + search.get('query');

            // query Spotify API and transform results
            return Ember.$.getJSON(url).then(function(result) {
                return result.tracks.map(function(track) {
                    return SpotifyExplorer.Track.create(track);
                });
            });
        });
    }
});