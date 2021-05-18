function getYouTubeSubs() {
  const id = "UCMWAPrl4Jif3aGmgrzHtulg"
  const api = "AIzaSyD1gz22YzoLTDNYp9chSxYr1SHnqt0qOqI"
  let url =
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCMupyJEe6LcCwjGSDcPMXWA&key=AIzaSyD1gz22YzoLTDNYp9chSxYr1SHnqt0qOqI";

  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let data = res.items[0].statistics.subscriberCount;
      document.querySelector("#sub-count").innerHTML = data;
    });
}

getYouTubeSubs();
