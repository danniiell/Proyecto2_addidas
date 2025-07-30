{/* <div className="preview">
  {item.type === "image" && <img src={item.src} alt={item.name} />}
  {item.type === "video" && <video src={item.src} controls width="100" />}
  {item.type === "audio" && <audio src={item.src} controls />}
</div> */}

const assets = [
  {
    id: "54-2",
    name: "ADIDAS REG 54-2",
    thumbnailUrl: "/01.jpg", // Imagen de prueba
    description: "Campaña Verano 2024",
  },
/*   {
    id: 2,
    name: "Video promocional REF-77",
    previewUrl: "../02.png", // preview del video
    format: "mp4",
    resolution: "1920x1080",
    type: "video"
  },
  {
    id: 3,
    name: "Audio corporativo",
    previewUrl: "../03.jpg", // preview del audio
    format: "mp3",
    resolution: "320kbps",
    type: "audio"
  }, */
];

export default assets;
