require("dotenv").config();
const fs = require("fs");
const ytdl = require("ytdl-core");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegPath);

class Converter {
  constructor() {}

  convert() {
    ytdl(process.env.VIDEO_URL)
      .pipe(fs.createWriteStream(`./downloads/video.mp4`))
      .on("finish", () => {
        ffmpeg(`./downloads/video.mp4`).save(`./audio/music.mp3`);
      });
  }
}

const converter = new Converter();

converter.convert();
