export const parsePageOptions = (page: string) => {
  const pre = '<pre>'
  return JSON.parse(
    page
      .slice(page.indexOf(pre) + pre.length, page.indexOf('</pre>'))
      .replaceAll('&quot;', '"'),
  )
}
