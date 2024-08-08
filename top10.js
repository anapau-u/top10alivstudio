console.log("JavaScript code is running!");

// top10.js
const popupImageMap = {
    top1: 'popup-images/popup-top1.png',
    top2: 'popup-images/popup-top2.png',
    top3: 'popup-images/popup-top3.png',
    top4: 'popup-images/popup-top4.png',
    top5: 'popup-images/popup-top5.png',
    top6: 'popup-images/popup-top6.png',
    top7: 'popup-images/popup-top7.png',
    top8: 'popup-images/popup-top8.png',
    top9: 'popup-images/popup-top9.png',
    top10: 'popup-images/popup-top10.png',
};

const audioMap = {
    top1: 'audio/top1.mp3',
    top2: 'audio/top2.mp3',
    top3: 'audio/top3.mp3',
    top4: 'audio/top4.mp3',
    top5: 'audio/top5.mp3',
    top6: 'audio/top6.mp3',
    top7: 'audio/top7.mp3',
    top8: 'audio/top8.mp3',
    top9: 'audio/top9.mp3',
    top10: 'audio/top10.mp3',
};

const images = document.querySelectorAll('img[id^="top"]');
const popupContainer = document.querySelector('.popup-container');
const audioElement = document.createElement('audio');

images.forEach((image) => {
    image.addEventListener('click', (event) => {
        console.log("Image clicked! Event listener function called.");
        event.preventDefault();
        const imageId = image.id;
        const popupImageUrl = popupImageMap[imageId];
        const audioUrl = audioMap[imageId];
        const popupWindow = document.getElementById('popup-window');
        const popupImage = document.createElement('img');

        popupImage.src = popupImageUrl;
        popupImage.alt = `Image ${imageId.replace('top', '')}`;
        popupImage.width = 325;
        popupImage.height = 500;

        audioElement.src = audioUrl;
        audioElement.play();

        popupImage.onload = () => {
            popupWindow.innerHTML = '';
            popupWindow.appendChild(popupImage);
            popupContainer.style.display = 'block';
            popupWindow.style.display = 'block'; 
        };
    });
});

popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) { 
        popupContainer.style.display = 'none'; 
        popupWindow.style.display = 'none'; 
        audioElement.pause();
    }
});