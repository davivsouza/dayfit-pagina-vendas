const ACCOUNT_ID = "794b269e-01d8-4c3e-9bf0-02a9ce2760c6";
const PLAYER_ID = "6a8c7a1f77491e5e29402bc8";
const VIDEO_ID = "6a8c79db60936d3f6b9d1d1b";

export const VSL = {
  elementId: `vid-${PLAYER_ID}`,
  playerScript: `https://scripts.converteai.net/${ACCOUNT_ID}/players/${PLAYER_ID}/v4/player.js`,
  smartplayerScript:
    "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js",
  playlist: `https://cdn.converteai.net/${ACCOUNT_ID}/${VIDEO_ID}/main.m3u8`,
  origins: [
    "https://cdn.converteai.net",
    "https://scripts.converteai.net",
    "https://images.converteai.net",
    "https://license.vturb.com",
  ],
};
