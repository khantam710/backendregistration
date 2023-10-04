import multer from 'multer';
import fs from 'fs';

const dest = (doc,cb) => {
    if(fs.existsSync(`./uploads/${doc}`)){
        cb(null, `./uploads/${doc}`)
    }
    else{
        fs.mkdirSync(`./uploads/${doc}`)
        cb(null, `./uploads/${doc}`)
    }
}

const fname = (file,cb) => {
    const name = file.originalname;
    const extArr = name.split('.')
    const ext = extArr[extArr.length - 1];
    extArr.pop()
    const uniqueSuffix = Date.now();
    cb(null,extArr.join('.') + '-' + uniqueSuffix + '.' + ext)
}
// RESUME MULTER
const resumeStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        dest('resume', cb);
    },
    filename: function (req, file, cb) {
        fname(file, cb);
    },
    fileFilter: function (req, file, cb) {
        // Check if the file has a .docx extension
        const allowedFileTypes = ['.docx'];
        const fileExtension = file.originalname.split('.').pop().toLowerCase();
        if (allowedFileTypes.includes(fileExtension)) {
            // If the file extension is allowed, accept it
            cb(null, true);
        } else {
            // If not, reject it with an error message
            cb(new Error('Only .docx files are allowed'));
        }
    }
});

export const resumeUpload = multer({ storage: resumeStorage})