// import esbuild from 'esbuild'
const esbuild = require('esbuild')

// console.log(esbuild)
esbuild.build({
  outfile: 'dist/index.mjs',
  entryPoints: ['src/index.tsx'],
  bundle: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  external: ['react', 'react-dom'],
  sourcemap: 'external',
  drop: ['console', 'debugger'],
  minify: true,
  minifySyntax: true,
  jsx: 'preserve'
})
