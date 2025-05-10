const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
   const queue = new Queue()

   expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()  
    queue.add('item 1')    
    expect(queue.elements).toEqual(['item 1']) 
  })

  it('Deve escolher o primeiro item da fila', () => {
  
    const queue = new Queue()
    queue.enqueue('primeiro')
    queue.enqueue('segundo')

    expect(queue.peek()).toEqual('primeiro') 
  })
  

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add('primeiro')
    queue.add('segundo')

    const removido = queue.remove() 
    expect(removido).toEqual('primeiro') 
    expect(queue.elements).toEqual(['segundo']) 
  })
})
