export class Service {

    private urlValue = "http://localhost:8080"
        "http://172.22.160.1:8080"

    buscarMusicas(){
        return fetch(`${this.urlValue}/music/all`)
            .then((response) => response.json())
            .then(response => response)
    }


    buscarMusicasCurtidas(email: String){
        return fetch(`${this.urlValue}/music/allMusicAndLikes?email=${email}`)
            .then((response) => response.json())
            .then(response => response)
    }


    registrarMusica(title:String, link:String, email:String, thumbnail: String){
        return fetch(`${this.urlValue}/music/register?title=${title}&link=${link}&email=${email}&thumbnail=${thumbnail}`,{
            method:"POST"
        })
            .then((response) => response.json())
            .then(response => response)
    }

    autenticarUsuario(email:String, password:String){
        return fetch(`${this.urlValue}/user/autentic?email=${email}&password=${password}`)
            .then((response) => response.json())
            .then(response => response)
    }

    registerUsuario(name:String, email:String, password:String, phone:String){
        return fetch(`${this.urlValue}/user/?
        email=${email}&password=${password}&name=${name}&phone=${phone}`,{
            method:"POST"
        })
            .then((response) => response.json())
            .then(response => response)
    }

    likeMusic(idMusic:Number, email:String){
        return fetch(`${this.urlValue}/likemusic/like?idMusic=${idMusic}&email=${email}`,{
            method:"GET"
        })
    }


    unLikeMusic(idMusic:Number, email:String){
        return fetch(`${this.urlValue}/likemusic/unlike?idMusic=${idMusic}&email=${email}`,{
            method:"GET"
        })
    }



}