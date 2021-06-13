// npx json-server --watch db.json

// Fetch API
const listaCliente = () => {
    return fetch('http://localhost:3000/profile')
                .then( resposta => {
                    if(resposta.ok){
                        return resposta.json()
                    }
                    throw new Error('Não foi possível listar os clientes')
                })
}

const criaCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
            throw new Error('Não foi possível criar um cliente')
      
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover um cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
            throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method:  'PUT',
        headers: {
            'Content-type' : 'application/json'
        }, 
            body: JSON.stringify({
                nome: nome,
                email: email
            }) 
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
            throw new Error('Não foi possível detalhar um cliente')
     
    })
}

// Module
export const clienteService = {
    listaCliente,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

/* Exemplo com Promise, antes de usar Fetch Api
const listaCliente = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()
    
        http.open('GET', 'http://localhost:3000/profile')
    
        http.onload = () => {
            if(http.status >= 400){
                reject( JSON.parse(http.response))
            } else {
                resolve( JSON.parse(http.response))
            } 
      }
      http.send()
    })

    return promise
}
    */
