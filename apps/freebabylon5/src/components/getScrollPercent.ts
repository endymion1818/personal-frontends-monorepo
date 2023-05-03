export default function getScrollPercent() {
  return (document.documentElement.scrollTop ||document.body.scrollTop) / ((document.documentElement.scrollHeight||document.body.scrollHeight) - document.documentElement.clientHeight) * 100;
}
