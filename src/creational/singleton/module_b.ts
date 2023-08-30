import { InMemoryDatabaseIIFE } from './database/in-memory-database-iife'
import { inMemoryDbClassic as inMemoryDbModuleA } from './module_a'

const inMemoryDbClassic = InMemoryDatabaseIIFE
inMemoryDbClassic.add({ name: 'Maria', age: 20 })
inMemoryDbClassic.add({ name: 'Joana', age: 50 })
inMemoryDbClassic.add({ name: 'Ana', age: 40 })

// inMemoryDbClassic.remove(2)

inMemoryDbClassic.show()

console.log(inMemoryDbClassic === inMemoryDbModuleA)

// I've the same thing, but now i'm using Module
