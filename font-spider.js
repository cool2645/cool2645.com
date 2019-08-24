const Fontmin = require('fontmin')
const path = require('path')
const fs = require('fs')

const fileTypes = 'js|css|html'
const fileExtReg = new RegExp(`^\.${fileTypes}`, 'i')
const dir = './public'

function walk(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (error, files) => {
      if (error) {
        return reject(error)
      }
      Promise.all(
        files.map(file => {
          return new Promise((resolve, reject) => {
            const filepath = path.join(dir, file)
            fs.stat(filepath, (error, stats) => {
              if (error) {
                return reject(error)
              }
              if (stats.isDirectory()) {
                walk(filepath).then(resolve)
              } else if (stats.isFile()) {
                // resolve(filepath);
                const ext = path.extname(filepath)
                if (fileExtReg.test(ext)) {
                  fs.readFile(
                    filepath,
                    {
                      encoding: 'utf8',
                    },
                    (err, content) => {
                      if (err || typeof content !== 'string') {
                        console.error(err)
                        reject(err)
                        return
                      }
                      resolve(content)
                    }
                  )
                } else {
                  resolve('')
                }
              }
            })
          })
        })
      ).then(foldersContents => {
        resolve(
          foldersContents.reduce(
            (all, folderContents) => all + folderContents,
            ''
          )
        )
      })
    })
  })
}

walk(dir).then(text => {
  new Fontmin()
    .src(path.join(dir, '*.ttf'))
    .dest(dir)
    .use(
      Fontmin.glyph({
        text,
        hinting: false,
      })
    )
    .run(function(err, files) {
      if (err) {
        throw err
      }
    })
})
