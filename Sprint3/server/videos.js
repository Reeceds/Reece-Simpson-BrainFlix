const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const videoList = require("./data/videoList.json");
const uploadedVideo = require("./data/uploadedVideo.json");

//Returns the video list
router.get("/", (req, res) => {
  res.status(200).json(videoList);
});

//Returns as single videos full data
router.get("/:videoid", (req, res) => {
  const displayVid = videoList.find((thing) => thing.id === req.params.videoid);
  if (displayVid) {
    res.status(200).json(displayVid);
  } else {
    res.status(400).json("error");
  }
});

// Posts to the video list
router.post("/", (req, res) => {
  const videoData = req.body;
  if (videoData.title && videoData.description && videoData.image) {
    const newVideo = {
      id: uuidv4(),
      title: videoData.title,
      description: videoData.description,
      image: videoData.image,
      ...uploadedVideo,
    };
    res.status(200).json(videoList.push(newVideo));
  } else {
    res.status(400).json("error");
  }
});

module.exports = router;
