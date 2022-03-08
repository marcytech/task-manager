import { observerFactory } from '../lib/observer.factory'

 export const state = observerFactory({
    tasks: [
        {id: 1, description: 'Criar pagina home', done:true},
        {id: 2, description: 'Criar cabeçalho da home', done:false},
        {id: 3, description: 'Criar rodape da home'}
    ]
})