import { InMemoryDatabaseModule } from './database/in-memory-database-module'

// I no longer need to get the instance
const inMemoryDbClassic = InMemoryDatabaseModule
inMemoryDbClassic.add({ name: 'Israel', age: 20 })
inMemoryDbClassic.add({ name: 'Vitoria', age: 50 })
inMemoryDbClassic.add({ name: 'Carlos', age: 40 })

// inMemoryDbClassic.remove(2)

inMemoryDbClassic.show()

export { inMemoryDbClassic }
