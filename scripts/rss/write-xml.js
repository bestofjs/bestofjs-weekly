import fs from 'fs-extra'
import path from 'path'

export default function writeXmlFile(xml, filename) {
  const filepath = path.join(process.cwd(), 'dist', 'rss', filename)
  return fs
    .outputFile(filepath, xml)
    .then(
      () => `${filename} file created (${(xml.length / 1024).toFixed()} KB)`
    )
}
