import { observerFactory } from '../lib/observer.factory'

 export const state = observerFactory({
    tasks: [
        {id: 1, description: 'Criar pagina home'},
        {id: 2, description: 'Criar cabeçalho da home'},
        {id: 3, description: 'Criar rodape da home'}
    ]
})