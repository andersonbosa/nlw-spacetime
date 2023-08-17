import { EmptyMemories } from '@/components/EmptyMemories'
import Memory, { IMemoryProps } from '@/components/Memory'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

const mountMemories = (memories: IMemoryProps[]) => {
  return (
    <>
      {memories.map((memory: IMemoryProps) => (
        <Memory key={memory.id} {...memory} />
      ))}
    </>
  )
}

// TOFIX: problem when FC or Promise<JSX.Element>
const Home: any = async () => {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  try {
    const token = cookies().get('token')?.value

    const response = await api.get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const memories: IMemoryProps[] = response.data

    if (memories.length === 0) {
      return <EmptyMemories />
    }

    return (
      <div className="flex flex-col gap-10 p-8">{mountMemories(memories)}</div>
    )
  } catch (error) {
    console.error('Error fetching memories:', error)
    return <div>Error fetching memories</div>
  }
}

export default Home
