/*
    © TheBgGuy, 2021
    This code is licensed under GPL v3.0.
*/

const gbChannelUrl = `https://www.youtube.com/channel/UCrSVIdNh3iEDPL-vENPgkgQ`;
const retryTime = 2000;

// Checks if the like button is loaded, if it is loaded and the like button isnt pressed, it presses it, if it isnt loaded yet, 
// it executes itself again after a second.
function tryLiking() {
    const channelNameElement = document.querySelectorAll(`ytd-channel-name`)[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild;

    if (channelNameElement != null) {

        if (channelNameElement.href == gbChannelUrl) {

            console.log(`%cVideo made by TheGbGuy!`, `font-weight: bold; font-size: 1.5rem`);

            const likeButtonElement = document.querySelectorAll(`#top-level-buttons`)[0].firstElementChild;

            // Check if the video isn't already liked
            if (!likeButtonElement.classList.contains(`style-default-active`)) {
                likeButtonElement.click()
            }
        }
    } else {
        window.setTimeout(tryLiking, retryTime);
    }
}

//tryLiking();
document.addEventListener('yt-page-data-updated', () => tryLiking());