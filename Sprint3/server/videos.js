const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const videoList = require('./data/videoList.json');

const displayVid = {

    "channel": "Reece Simpson",
    "views": "1,001,023",
    "likes": "110,985",
    "duration": "4:01",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": 1545162149000,
    "comments": [
    {
    "name": "Micheal Lyons",
    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
    "likes": 0,
    "timestamp": 1545162149000
    },
    {
    "name": "Gary Wong",
    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
    "likes": 0,
    "timestamp": 1544595784046
    },
    {
    "name": "Theodore Duncan",
    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
    "likes": 0,
    "timestamp": 1542262984046
    }
    ]
    }


//Returns the video list
router.get("/", (req, res) => {
    res.status(200).json(videoList);
})

// //Returns the video list
// router.get("/", (req, res) => {
//     res.json(videoList.map(video => ({
//         id: video.id,
//         title: video.title,
//         channel: video.channel,
//         image: video.image
//     })));
// })



//Returns as single videos full data
router.get("/:videoid", (req,res) => {
    const displayvid = videoList.find(thing => thing.id === req.params.videoid)
    if(displayvid){
        res.status(200).json(displayvid)
    } else {
        res.status(404).json({
            "message":"No video with this id exists"
        });
    }
})





// Posts to the video list
router.post("/", (req, res) => {
    const videoData = req.body;
    if(videoData.title && videoData.description && videoData.image) {
        const newVideo = {
            id: uuidv4(),
            title: videoData.title,
            description: videoData.description,
            image: videoData.image,
            ...displayVid
        }

        videoList.push(newVideo);

        res.status(201).json({
            success: true,
            newVideo: newVideo
        })
    } else {
        res.status(400).json({
            success: false,
        })
    }
})



module.exports = router;






// // Posts to the video list
// router.post("/videolist", (req, res) => {
//     console.log(req.body);
//     res.send({
//         id: uuidv4(),
//         title: req.body.title,
//         description: req.body.description,
//         image: req.body.image,
//         // ...req.body //Grab everything instead of writing them all out
//     });
// })


