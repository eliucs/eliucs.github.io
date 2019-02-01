export const cacheContent = (key, content) => ({
  type: 'CACHE_CONTENT',
  data: {
    key,
    content,
  },
});
