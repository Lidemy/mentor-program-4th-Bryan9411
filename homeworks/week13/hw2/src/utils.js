/* eslint linebreak-style: ["error", "windows"] */
export function appendStyle(cssTemplate) {
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(cssTemplate));
  document.head.appendChild(styleElement);
}

export function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function appendCommentToDom(container, comment, isPrepend) {
  const html = `
    <div class="card comment-mt">
      <div class="card-body">
        <h5 class="card-title">${escapeHtml(comment.nickname)}</h5>
        <p class="card-text">${escapeHtml(comment.content)}</p>
      </div>
    </div>
  `;
  if (isPrepend) {
    container.prepend(html);
  } else {
    container.append(html);
  }
}
