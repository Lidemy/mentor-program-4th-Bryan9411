/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable camelcase */
/* eslint-disable prefer-template */
import $ from 'jquery';

export function getComments(apiUrl, site_key, before, cb) {
  let url = `${apiUrl}/api_comments.php?site_key=${site_key}`;
  if (before) {
    url += '&before=' + before;
  }
  $.ajax({
    url,
  }).done((data) => {
    cb(data);
  });
}

export function addComments(apiUrl, site_key, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}/api_add_comments.php`,
    data,
  }).done((data) => {
    cb(data);
  });
}
