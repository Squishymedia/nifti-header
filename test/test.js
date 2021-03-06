var test = require('tape')
var nifti = require('../nifti.js')
var fs = require('fs')
var path = require('path')

test("load minimal.nii", function (t) {
  // Test file is one of the example data files supplied here: http://nifti.nimh.nih.gov/nifti-1/data
  var file = nifti.parse(fs.readFileSync(path.join(path.dirname(module.filename),'minimal.nii')))

  file.buffer = file.buffer.byteLength + " bytes"
  file.data = file.data.length + " items"
  console.log(file)
  
  t.end()
})

