import React from 'react';

const VideoItem = ({video}) =>
{
    return(
        <div>{video.snippet.channelTitle}</div>
    )
}

export default VideoItem;