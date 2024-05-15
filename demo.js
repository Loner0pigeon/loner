document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const skipForwardBtn = document.getElementById("skipForwardBtn");
  const searchBtn = document.getElementById("searchBtn");
  const songSelector = document.getElementById("songSelector");
  const searchInput = document.getElementById("searchInput");
  const searchSubmit = document.getElementById("searchSubmit");
  const playlistItems = document.querySelectorAll(".playlist li");

  playPauseBtn.addEventListener("click", function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "暂停";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "播放";
    }
  });

  skipForwardBtn.addEventListener("click", function() {
    audioPlayer.currentTime += 10; // Skip 10 seconds forward
  });

  songSelector.addEventListener("change", function() {
    const selectedSong = songSelector.value;
    audioPlayer.src = selectedSong;
    audioPlayer.play();
    playPauseBtn.textContent = "暂停";
  });

  searchSubmit.addEventListener("click", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const options = songSelector.options;
    for (let i = 0; i < options.length; i++) {
      const songName = options[i].textContent.toLowerCase();
      if (songName.includes(searchTerm)) {
        songSelector.selectedIndex = i;
        const selectedSong = songSelector.value;
        audioPlayer.src = selectedSong;
        audioPlayer.play();
        playPauseBtn.textContent = "暂停";
        break;
      }
    }
  });


  // 歌曲列表点击事件
  playlistItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
      // 切换选中样式
      playlistItems.forEach(function(item) {
        item.classList.remove("selected");
      });
      item.classList.add("selected");

      // 更新音频播放器的src以播放所选歌曲
      const songPath = "Demo " + (index + 1) + ".mp3"; // 这里假设歌曲文件命名为 music1.mp3, music2.mp3, ...
      audioPlayer.src = songPath;

      // 如果当前音频暂停状态，则开始播放
      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "暂停";
      }
    });
  });
});