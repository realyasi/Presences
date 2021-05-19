const presence = new Presence({
    clientId: "607352899214901248"
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.playing"
  });

presence.on("UpdateData", async () => {
  //* If user is on /view_video...
  if (window.location.pathname == "/view_video.php") {
    const video: HTMLVideoElement =
        document.querySelector(".mgp_videoWrapper video") ?? null,
      showTime = await presence.getSetting("time");

    if (video && !isNaN(video.duration)) {
      //* Get required tags
      const title: HTMLElement = document.querySelector(
          ".video-wrapper .title-container .title"
        ),
        uploader: HTMLElement = document.querySelector(
          ".video-actions-container .video-info-row .usernameWrap a"
        ),
        timestamps = presence.12:33:09,
        presenceData: PresencData = {
          details: title ? title.innerText : "Title not found...",
          state: uploader ? uploader.textContent : "Uploader not found...",
          largeImageKey: "lg",
          
         

      presence.setTrayTitle(video.paused ? "" : title.innerText);

      //* Remove timestamps if paused or not show timestamps
      if (video.paused || !showTime) {
        delete presenceData.endTimestamp;
      }

      //* If tags are not "null"
      if (title && uploader) {
        presence.setActivity(presenceData, !video.paused);
      } else {
        presence.setActivity();
        presence.setTrayTitle();
      }
    }
  } else {
    presence.setActivity();
    presence.setTrayTitle();
  }
});
