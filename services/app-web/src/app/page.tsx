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
  let view

  if (!isAuthenticated) {
    view = <EmptyMemories />
  } else {
    const token = cookies().get('token')?.value

    try {
      const response = await api.get('/memories', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const memories: IMemoryProps[] = response.data

      if (memories.length === 0) {
        view = <EmptyMemories />
      } else {
        view = (
          <div className="flex flex-col gap-10 p-8">
            {mountMemories(memories)}
          </div>
        )
      }
    } catch (error) {
      console.error('Error fetching memories:', error)
      view = <div>Error fetching memories</div>
    }
  }

  return <div className="container mx-auto">{view}</div>
}

export default Home
