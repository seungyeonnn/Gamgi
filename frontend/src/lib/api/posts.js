import client from './client';
import qs from 'qs';

export const writePost = ({ title, body, emotion }) =>
  client.post('/api/posts', { title, body, emotion });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, emotion }) => {
  const queryString = qs.stringify({
    page,
    username,
    emotion,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, emotion }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    emotion,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
