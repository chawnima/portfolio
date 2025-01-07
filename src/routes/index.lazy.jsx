import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex w-screen h-screen items-center justify-center'>
    <h1 className='text-teal-500 text-3xl font-bold'>Index</h1>
  </div>
}
