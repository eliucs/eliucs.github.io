export default function setImmediateInterval(fn, ms) {
  fn();
  return setInterval(fn, ms);
}
