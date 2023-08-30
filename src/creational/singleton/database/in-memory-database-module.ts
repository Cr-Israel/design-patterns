import { type User } from '../interfaces/User'

// Singleton using the Module itself
const users: User[] = []

export const InMemoryDatabaseModule = {
  add (user: User): void {
    users.push(user)
  },

  remove (index: number): void {
    users.splice(index, 1)
  },

  show (): void {
    for (const user of users) {
      console.log(user)
    }
  }
}
