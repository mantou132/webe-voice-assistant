// 希望 content script 能使用 es6 modules
export default path => `
  (() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '${browser.extension.getURL(path)}';
    document.head.append(script);
  })()
`;