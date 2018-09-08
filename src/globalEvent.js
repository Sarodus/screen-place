export default (name, details) => {
  (window || document).dispatchEvent(
    new CustomEvent(name, {
    detail: details,
    bubbles: true,
    cancelable: true,
  }))
}
