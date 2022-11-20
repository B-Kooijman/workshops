export async function fetchResult(url) {
  const result = await fetch(url).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(`${response.status}: category not found`);
    }
  );

  return result;
}
