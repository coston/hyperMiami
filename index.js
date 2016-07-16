exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: '#5CC9F5',
    cursorColor: '#5CC9F5',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: #5CC9F5;
      }
      .tabs_nav .tabs_title {
        color: #5CC9F5;
      }
    `
  });
}
