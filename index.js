const { url } = require('inspector')
const { URL } = require('url')

const fastify = require('fastify')()

fastify.get('/g',function(request,reply){
    
    console.log('it hit')
    reply
    .type('text/html')
    reply.redirect([303],'https://www.google.com')
})
fastify.listen(5000,function(err, address){
    if(err){
        console.log(err)
        process.exit(1)
    }
    else{
        console.log('success,listening at 5000')
    }
})