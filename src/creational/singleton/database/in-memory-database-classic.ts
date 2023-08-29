import { type User } from '../interfaces/User'

export class InMemoryDatabaseClassic {
  private static instance: InMemoryDatabaseClassic | null = null
  private readonly users: User[] = []

  private constructor () {}

  static getInstance (): InMemoryDatabaseClassic {
    if (InMemoryDatabaseClassic.instance === null) {
      InMemoryDatabaseClassic.instance = new InMemoryDatabaseClassic()
    }

    return InMemoryDatabaseClassic.instance
  }

  add (user: User): void {
    this.users.push(user)
  }

  remove (index: number): void {
    this.users.splice(index, 1)
  }

  show (): void {
    for (const user of this.users) {
      console.log(user)
    }
  }
}

// const inMemoryDbClassic = InMemoryDatabaseClassic.getInstance()
// inMemoryDbClassic.add({ name: 'Israel', age: 20 })
// inMemoryDbClassic.add({ name: 'Vitoria', age: 50 })
// inMemoryDbClassic.add({ name: 'Carlos', age: 40 })

// inMemoryDbClassic.remove(2)

// inMemoryDbClassic.show()

// console.log(inMemoryDbClassic)
