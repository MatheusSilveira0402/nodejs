import http from 'http'

export default  class Socketserver{
    constructor({ port }){
        this.port = port 
    }

    async initialize(eventEmitter){

        const server = http.createServer((req, res)=> {
            res.writeHead(200, {'Content-Type': 'Text/plain'})
            res.end('hey there!!')
        })

    }
}