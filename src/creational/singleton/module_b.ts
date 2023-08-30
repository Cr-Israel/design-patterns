import { InMemoryDatabaseModule } from './database/in-memory-database-module'
import { inMemoryDbClassic as inMemoryDbClassicModuleA } from './module_a'

const inMemoryDbClassic = InMemoryDatabaseModule
inMemoryDbClassic.add({ name: 'Maria', age: 20 })
inMemoryDbClassic.add({ name: 'Joana', age: 50 })
inMemoryDbClassic.add({ name: 'Ana', age: 40 })

// inMemoryDbClassic.remove(2)

inMemoryDbClassic.show()

console.log(inMemoryDbClassic === inMemoryDbClassicModuleA)

// I've the same thing, but now i'm using Module
