// Holder på Image-objektene så nettleseren ikke kaster de
// ferdig dekodede bildene før vi trenger dem.
const cache = [];

export function preloadImages(srcs) {
  return Promise.all(
    srcs.map((src) => {
      const img = new Image();
      img.src = src;
      cache.push(img);
      // decode() laster ned OG pakker ut bildet, så det ikke
      // skjer midt i en animasjon senere. catch() gjør at ett
      // ødelagt bilde ikke stopper resten.
      return img.decode().catch(() => {});
    })
  );
}
