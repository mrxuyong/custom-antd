// export {default as Select} from './select';

/* eslint no-console:0 */
// this file is not used if use https://github.com/ant-design/babel-plugin-import

if (process.env.NODE_ENV !== 'production') {
  if (typeof console !== 'undefined' && console.warn && typeof window !== 'undefined') {
    console.warn(`You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.`);
  }
}
export {default as Select} from './select';