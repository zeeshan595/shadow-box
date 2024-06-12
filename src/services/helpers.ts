export function randomRange(min: number, max: number) {
  const rand = Math.random();
  return Math.round(rand * (max - min) + min);
}

export function stringToNum(str: string): number {
  try {
    const num = Number.parseInt(str);
    if (isNaN(num)) return 0;
    if (num === undefined || num === null) return 0;
    return num;
  } catch (e) { }
  return 0;
}

export async function uploadDocument() {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", ".json");
  input.style.display = "none";
  document.body.appendChild(input);

  return new Promise<any[] | null>((resolve) => {
    input.onchange = function () {
      if (!input.files) return resolve(null);
      const file = input.files[0];
      if (file.type === "application/json") {
        file.text().then((data) => resolve(JSON.parse(data)));
      } else {
        alert('this type of file is not supported, please use a json format');
        resolve(null);
      }
    };
    input.onabort = function () {
      document.body.removeChild(input);
      resolve(null);
    };
    input.oncancel = function () {
      document.body.removeChild(input);
      resolve(null);
    };
    input.click();
  });
}