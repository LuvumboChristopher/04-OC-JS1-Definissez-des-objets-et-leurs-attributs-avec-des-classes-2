let episode = {
  title: 'Dark Beginnings',
  duration: 45,
  hasBeenWatched: false
};

let episodeTitle = 'The End of The Beginning' ;
let episodeDuration = 55;
let episodeHasBeenWatched = true;

episode.title = episodeTitle;
episode.duration = episodeDuration;
episode.hasBeenWatched = episodeHasBeenWatched;

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}`