import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_index/')({
  component: () => <div>Hello /_index/!</div>
})