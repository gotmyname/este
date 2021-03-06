/* eslint-disable no-console */
import gulp from 'gulp';

gulp.task('native-upgrade', () => {
  console.log(`
    Steps to upgrade React Native in Este

    - Update package.json
      - react-native, use fixed version
      - react, use fixed version from React Native package.json dependencies

    Already existing App
      - run 'react-native upgrade'

    From Scratch
      - run 'react-native init YourAppName' in some temp dir
      - delete 'android' and 'ios' directories in your Este app
      - copy 'android' and 'ios' directories from some temp dir
      - run 'npm install'
      - run 'react-native link'
      - follow instruction from github.com/facebook/react-native-fbsdk

    Yeah, it's that easy.
  `);
});
