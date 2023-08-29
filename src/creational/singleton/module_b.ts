import { InMemoryDatabaseClassic } from './database/in-memory-database-classic'
import { inMemoryDbClassic as inMemoryDbClassicModuleA } from './module_a'

const inMemoryDbClassic = InMemoryDatabaseClassic.getInstance()
inMemoryDbClassic.add({ name: 'Maria', age: 20 })
inMemoryDbClassic.add({ name: 'Joana', age: 50 })
inMemoryDbClassic.add({ name: 'Ana', age: 40 })

// inMemoryDbClassic.remove(2)

inMemoryDbClassic.show()
