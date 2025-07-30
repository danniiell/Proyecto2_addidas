{/* <div className="preview">
  {item.type === "image" && <img src={item.src} alt={item.name} />}
  {item.type === "video" && <video src={item.src} controls width="100" />}
  {item.type === "audio" && <audio src={item.src} controls />}
</div> */}
// assetsData.js


const watermark = "/WaterMark.png";

// Array de assets/productos
const assets = [
  {
    name: "Producto 1",
    type: "Electrónico",
    dimensions: "15x10x5 cm",
    image: "01.jpg"
  },
  {
    name: "Smartphone Premium",
    type: "Dispositivo móvil", 
    dimensions: "16x8x1 cm",
    image: "02.png"
  },
  {
    name: "Auriculares Bluetooth",
    type: "Audio",
    dimensions: "20x18x8 cm", 
    image: "03.jpg"
  }
];

export { watermark, assets };





