export function dataStudyT(e) {
  console.log(e);

  return `
    <div class=" space-y-6">
      ${e.content
        .map(
          (element) => `
            <div class="border rounded-lg p-4 bg-white">
              <h3 class="text-lg font-semibold mb-3">${element.title}</h3>
              <div class="space-y-2">
                ${element.data
                  .map(
                    (file) => `
                      <a 
                        href="${file.url}" 
                        download="${file.title}" 
                        class="block p-3 border rounded hover:bg-gray-50 transition-colors"
                      >
                        <div class="font-medium">${file.title}</div>
                        ${
                          file.description
                            ? `
                          <div class="text-sm text-gray-600 mt-1">${file.description}</div>
                        `
                            : ""
                        }
                      </a>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}
