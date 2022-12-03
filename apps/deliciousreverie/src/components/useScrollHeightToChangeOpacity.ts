import getScrollPercent from "./getScrollPercent"

export default function useScrollHeightToChangeOpacity(domElement, inHeight, outHeight){
  if (getScrollPercent() > inHeight &&  getScrollPercent() < outHeight){
  domElement.classList.add('visible')
} else {
  domElement.classList.remove('visible')
}
}
