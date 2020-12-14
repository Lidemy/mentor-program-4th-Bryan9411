/* eslint linebreak-style: ["error", "windows"] */
export const cssTemplate = '.comment-mt { margin: 10px 0; }';

export function getLoadMoreButton(className) {
  return `
    <button class="btn btn-primary ${className}">載入更多</button>
  `;
}

export function getForm(className, commentsClassName) {
  return `
    <div>
      <form class="${className}">
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="form__nickname">暱稱</label>
          <input type="text" name="nickname" class="form-control">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1" class="content__textarea">留言內容</label>
          <textarea name="content" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">送出</button>
        <div class="${commentsClassName}"></div>
      </form>
    </div>
  `;
}
