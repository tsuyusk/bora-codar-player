export function setInterval(callback: Function, interval: number) {
  // ! TODO: Create a setInterval with requestAnimationFrame so it works properly on background

  let id = window.setInterval(callback, interval);

  return {
    clear: () => {
      window.clearInterval(id);
    }
  }
}

