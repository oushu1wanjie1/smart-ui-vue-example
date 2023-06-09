import { Plugin } from 'vite'
import { readFileSync, readdirSync } from 'fs'

let idPerfix = ''
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g

const hasViewBox = /(viewBox="[^>+].*?")/g

const clearReturn = /(\r)|(\n)/g

function findSvgFile(dir: any, replaceMethod?: (path: string, name: string) => string): string[] {
  const svgRes = []
  const dirents = readdirSync(dir, {
    withFileTypes: true
  })
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/', replaceMethod))
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        // eslint-disable-next-line no-loop-func
        .replace(svgTitle, ($1, $2) => {
          // console.log(++i)
          // console.log(dirent.name)
          let width = 0
          let height = 0
          let content = $2.replace(
            clearHeightWidth,
            (s1: any, s2: string, s3: number) => {
              if (s2 === 'width') {
                width = s3
              } else if (s2 === 'height') {
                height = s3
              }
              return ''
            }
          )
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          // @ts-ignore
          return `<symbol id="${replaceMethod ? replaceMethod(dir, dirent.name) : dirent.name.replace(
            '.svg',
            ''
          )}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

export const svgBuilder = (
  path: string,
  perfix = 'icon',
  replaceMethod?: (path: string, name: string) => string
): Plugin => {
  if (path === '') { // @ts-ignore
    return
  }
  idPerfix = perfix
  const res = findSvgFile(path, replaceMethod)
  // console.log(res.length)
  // const res = []
  // eslint-disable-next-line consistent-return
  return {
    name: 'svg-transform',
    transformIndexHtml(html): string {
      return html.replace(
        '<body>',
        `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `
      )
    }
  }
}
