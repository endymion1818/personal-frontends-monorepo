import getScrollPercent from "./getScrollPercent"

export function useScrollHeightToChangeOpacity(domElement, inHeight, outHeight){
  if (getScrollPercent() > inHeight &&  getScrollPercent() < outHeight){
  domElement.style.opacity = 0.8
} else {
  domElement.style.opacity = 0
}
}
