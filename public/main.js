console.log('我是main.js')
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插入HTML头部
                document.head.appendChild(style)
            }else {
                alert('加载CSS失败了')
            }
        }
    }
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET', '/1.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status <300){
                //创建script标签
                const script = document.createElement('script')
                //填写script内容
                script.innerHTML = request.response
                //插入HTML身体
                document.body.appendChild(script)
            }else {
                alert('加载JS失败了')
            }
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.html')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >=200 && request.status <300){
                //创建div
                const div = document.createElement("div")
                //填写div
                div.innerHTML = request.response
                //插入HTML身体
                document.body.appendChild(div)
            }else {
                alert('加载html失败了')
            }
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.json')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >=200 && request.status <300){
                console.log(request.response)
                const object = JSON.parse(request.response)
                console.log(object)
                myName.textContent = object.name
            }else {
                alert('加载JSON失败了')
            }
        }
    }
    request.send()
}
let n = 1
getPAGE.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >=200 && request.status <300){
                const array = JSON.parse(request.response)
                array.forEach(item=>{
                    const li = document.createElement('li')
                    li.textContent = item.id
                    x.appendChild(li)
                })
                n+=1
            }else {
                alert('加载JSON失败了')
            }
        }
    }
    request.send()
}