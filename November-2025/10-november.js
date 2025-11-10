/*
INSTRUCTIONS

Extension Extractor

Given a string representing a filename, return the extension of the file.

    - The extension is the part of the filename 
      that comes after the last period (.).
    - If the filename does not contain a period 
      or ends with a period, return "none".
    - The extension should be returned as-is, preserving case.
*/

function getExtension(filename) {
  const lastIndexDot = filename.lastIndexOf('.')

  if (lastIndexDot === -1 || lastIndexDot === filename.length - 1) return 'none'

  return filename.slice(lastIndexDot + 1)
}

module.exports = getExtension
