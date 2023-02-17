import VideoSystem from "./videoModel.js";
import VideoView from "./videoView.js";
import VideoController from "./videoController.js";


$(function(){
    const VideoApp = new VideoController(
      VideoSystem.getInstance(), new VideoView()
    );
  });