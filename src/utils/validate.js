
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUserAccount(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(str)
}

export function validUserPassword(str) {
  return /.*[`~!@#$%^&*()+=|{}':;',\[\].<>/?~！@#￥%……&*()——+|{}【】‘；：”“’。，、？\\]+.*/.test(str)
}
