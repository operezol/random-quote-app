// A mock function to mimic making an async request for data
export function fetchCount() {
  return fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
    .then((response) => response.json())
    .then((json) => {
      return {
        data: json.quotes[Math.floor(Math.random() * (json.quotes.length - 1))],
      };
    });
}
