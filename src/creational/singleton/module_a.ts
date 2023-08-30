import { InMemoryDatabaseClassic } from './database/in-memory-database-classic'

const inMemoryDbClassic = InMemoryDatabaseClassic.instance
inMemoryDbClassic.add({ name: 'Israel', age: 20 })
inMemoryDbClassic.add({ name: 'Vitoria', age: 50 })
inMemoryDbClassic.add({ name: 'Carlos', age: 40 })

// inMemoryDbClassic.remove(2)

// inMemoryDbClassic.show()

export { inMemoryDbClassic }
