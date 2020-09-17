// import axios from 'axios'
// axios.post('http://xxx.com/file', {id:1}, { responseType: 'blob' })
// .then(res => {
//  saveFile(res,'xxx.xls') //这里要传入文件名以及文件后缀
// })
// .catch(err => {
  
// })

export function saveFile (data, name) {
    try {
    //     console.log(data)
    // const blobUrl = window.URL.createObjectURL(new Blob(data))
    var binaryData = [];
    binaryData.push(data);
    const blobUrl = window.URL.createObjectURL(new Blob(binaryData))
    const a = document.createElement('a')
    a.style.display = 'none'
    a.download = name
    a.href = blobUrl
    a.click()

    } catch (e) {
    console.log(e)

    }
}