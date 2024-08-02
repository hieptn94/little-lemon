import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_index/reservations')({
  component: () => <div>Hello /_index/reservations!</div>
})