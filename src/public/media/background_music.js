document.addEventListener("DOMContentLoaded", () => {
    // Create an audio element
    const audio = document.createElement('audio');
  
    // Set the source to your provided URL
    audio.src = 'https://cdn1.suno.ai/e984ba8f-7efc-4dcf-a877-c2ca99032fbc.mp3';
  
    // Set autoplay to true
    audio.autoplay = true;
  
    // Optionally, you can set the loop attribute if you want the music to play continuously
    audio.loop = true;
  
    // Append the audio element to the body
    document.body.appendChild(audio);
});
  
// document.addEventListener("DOMContentLoaded", () => {
// // Create an audio element
// const audio = document.createElement('audio');

// // Set the source to the local audio file
// audio.src = './media/background-music.mp3'; // Adjust the path as necessary

// // Set autoplay to true
// audio.autoplay = true;

// // Optionally, you can set the loop attribute if you want the music to play continuously
// audio.loop = true;

// // Append the audio element to the body
// document.body.appendChild(audio);
// });
  