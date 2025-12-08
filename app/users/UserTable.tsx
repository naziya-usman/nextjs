import { sort } from 'fast-sort'
import Link from 'next/link'

type User = { id: number; name: string; email: string }

interface Props {
  sortOrder: string
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const user: User[] = await res.json()
  console.log(" data  sort:", sortOrder)

  const sortedData = sort(user).asc(
    sortOrder === 'name'
      ? (u: User) => u.name
      : sortOrder === 'email'
        ? (u: User) => u.email
        : (u: User) => u.id
  )
  
  return (
    <div>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th><Link href="/users?sortOrder=name"> Name</Link></th>
              <th><Link href="/users?sortOrder=email"> Email</Link></th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable
