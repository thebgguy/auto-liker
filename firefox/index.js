const gbChannelUrl = `https://www.youtube.com/channel/UCrSVIdNh3iEDPL-vENPgkgQ`;

// Check if the video comes from TheGbGuy
const like = () => {
    console.log(`kaka`);
    if (document.querySelectorAll(`ytd-channel-name`)[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.href == gbChannelUrl) {
        console.log(`NAV POOPOOO`);
    } else {
        console.log(`NAV POOPOOOOO`);
    }
}

document.querySelector('ytd-app').addEventListener('yt-page-data-updated', like());

//document.onload = () => like();