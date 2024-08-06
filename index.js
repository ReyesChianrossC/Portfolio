const videos = document.querySelectorAll(".video");
const links = document.querySelectorAll(".linksPic")

videos.forEach(video =>{
    video.addEventListener("mouseover", event =>{
        event.target.setAttribute("controls","")
    })})

videos.forEach(video =>{
    video.addEventListener("mouseout", event =>{
        event.target.removeAttribute("controls")
    })
})

links.forEach(link =>{
    link.addEventListener("click", event =>{
        let linksPicId = event.target.id;

        switch(linksPicId){
            case "linksPic1":
                console.log("button1 clicked");
                window.open("https://www.facebook.com/chian.yooki", "_blank")
                break;
            case "linksPic2":
                console.log("button2 clicked");
                window.open("https://www.instagram.com/chnrys_/", "_blank")
                break;
            case "linksPic3":
                console.log("button3 clicked");
                window.open("https://x.com/Sakuyoki27", "_blank")
                break;
        }
    })
})

links.forEach(link =>{
    link.addEventListener("mouseover", event =>{
        event.target.style.cursor = "pointer";
    },
    link.addEventListener("mouseout", event =>{
        event.target.style.cursor = "default";
    }))

})