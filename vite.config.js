export default {
    root: 'src',
    build: {
      outDir: '../dist',
      rollupPoptions: {
        input: {
            main: './index.html',
            bios: './bios.html',
        }
      },
    }
  };
  