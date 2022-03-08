// A mock function to mimic making an async request for data
export function fetchCount() {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: "hola mundo" }), 500)
  );
}
