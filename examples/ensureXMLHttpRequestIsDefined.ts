import * as xhr from 'xhr2';

/**
 * This is a workaround to avoid a reference error when running in Node.
 * Fixes ReferenceError: XMLHttpRequest is not defined
 */
export const ensureXMLHttpRequestIsDefined = () => {
  if (typeof XMLHttpRequest === 'undefined') {
    global.XMLHttpRequest = xhr;
  }
};
