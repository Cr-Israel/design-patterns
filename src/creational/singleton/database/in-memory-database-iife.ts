import { type User } from '../interfaces/User'

// Applying immediately Invoked Function Expression
export const InMemoryDatabaseIIFE = (function () {
  // I use the function's Closure to create the private variable
  const users: User[] = []

  return {
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
})()
