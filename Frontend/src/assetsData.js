<div className="preview">
  {item.type === "image" && <img src={item.src} alt={item.name} />}
  {item.type === "video" && <video src={item.src} controls width="100" />}
  {item.type === "audio" && <audio src={item.src} controls />}
</div>
