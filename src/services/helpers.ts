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

export async function uploadDocument(type: ".json" | ".pdf" = ".json") {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", type);
  input.style.display = "none";
  document.body.appendChild(input);

  return new Promise<{ type: 'json' | 'pdf', data: any[] | null }>((resolve) => {
    input.onchange = function () {
      if (!input.files) return resolve({ type: 'json', data: null });
      const file = input.files[0];
      if (file.type === "application/pdf") {
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          function () {
            resolve({
              type: 'pdf',
              data: [reader.result]
            });
          },
          false
        );
        reader.readAsDataURL(file);
      } else if (file.type === "application/json") {
        file.text().then((data) => resolve({
          type: 'json',
          data: JSON.parse(data)
        }));
      }
    };
    input.onabort = function () {
      document.body.removeChild(input);
      resolve({ type: 'json', data: null });
    };
    input.oncancel = function () {
      document.body.removeChild(input);
      resolve({ type: 'json', data: null });
    };
    input.click();
  });
}