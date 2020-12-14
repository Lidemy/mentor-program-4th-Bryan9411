/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] *//* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable object-curly-spacing */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-alert */
import { getComments, addComments } from './api';
import $ from 'jquery';
import { appendCommentToDom, appendStyle } from './utils';
import { cssTemplate, getLoadMoreButton, getForm} from './templates';

export function init(options) {
  let site_key = '';
  let apiUrl = '';
  let containerElement = null;
  let commentDom = null;
  let beforeId = null;
  let isEnd = false;
  let loadMoreClassName;
  let commentsClassName;
  let commentsSelector;
  let formClassName;
  let formSelector;

  site_key = options.site_key;
  apiUrl = options.apiUrl;
  loadMoreClassName = `${site_key}-load__more`;
  commentsClassName = `${site_key}-comments`;
  formClassName = `${site_key}-add-comment-form`;
  formSelector = '.' + formClassName;
  commentsSelector = '.' + commentsClassName;
  containerElement = $(options.containerSelector);
  containerElement.append(getForm(formClassName, commentsClassName));
  appendStyle(cssTemplate);

  commentDom = $(commentsSelector);
  getNewComments();
  $(commentsSelector).on('click', '.' + loadMoreClassName, (e) => {
    e.preventDefault();
    getNewComments();
  });

  $(formSelector).submit((e) => {
    e.preventDefault();
    const nicknameDom = $(`${formSelector} input[name=nickname]`);
    const contentDom = $(`${formSelector} textarea[name=content]`);
    const commentData = {
      site_key,
      nickname: nicknameDom.val(),
      content: contentDom.val(),
    };
    addComments(apiUrl, site_key, commentData, (data) => {
      if (!data.success) {
        alert(data.message);
        return;
      }
      nicknameDom.val('');
      contentDom.val('');
      appendCommentToDom($(commentsSelector), commentData, true);
    });
  });
  function getNewComments() {
    const commentDom = $(commentsSelector);
    $('.' + loadMoreClassName).hide();
    if (isEnd) return;
    getComments(apiUrl, site_key, beforeId, (data) => {
      if (!data.success) {
        alert(data.message);
        return;
      }
      const comments = data.discussions;
      for (let comment of comments) {
        appendCommentToDom(commentDom, comment);
      }
      let length = comments.length;
      if (length === 0) {
        isEnd = true;
        $('.' + loadMoreClassName).hide();
      } else {
        beforeId = comments[length - 1].id;
        const loadMoreButtonHTML = getLoadMoreButton(loadMoreClassName);
        $(commentsSelector).append(loadMoreButtonHTML);
      }
    });
  }
}
