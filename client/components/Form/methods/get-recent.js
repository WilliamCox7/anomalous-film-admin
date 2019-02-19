export default function() {
  try {
    let recent = localStorage.getItem('recent');
    if (!recent) return resetArrays();
    else return JSON.parse(recent);
  } catch (err) {
    console.error(err);
    return resetArrays();
  }
}

function resetArrays() {
  return {
    'movies': [],
    'tv-series': [],
    'locations': []
  };
}