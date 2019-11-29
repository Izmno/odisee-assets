const { exec } = require('child_process');

let fonts = ['Regular', 'Bold', 'It', 'BoldIt']
let target = {'Regular' : 'sspmn8t', 'Bold': 'sspbn8t', 'It': 'sspmit8t', 'BoldIt': 'sspbit8t'}

for (f of fonts) {
    let source = require.resolve(`source-sans-pro/TTF/SourceSansPro-${f}.ttf`)
    let cop = `fonts/SourceSansPro-${f}.ttf`
    let tfm = `fonts/${target[f]}.tfm`
    let vpl = `fonts/SourceSansPro-${f}.vpl`
    let vf = `fonts/SourceSansPro-${f}.vf`

    exec(`ttf2tfm ${source} -q -T t1-WGL4.enc -v ${vpl} ${tfm}`, (err, stdout, sterr) => {
        return
    })

    exec(`vptovf ${vpl} ${vf} ${tfm}`, (err, stdout, sterr) => {
        return
    })

    exec(`cp ${source} ${cop}`)


}