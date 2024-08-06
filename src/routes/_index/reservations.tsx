import { createFileRoute } from "@tanstack/react-router";
import Reservations from "@/pages/reservations";
 
export const Route = createFileRoute("/_index/reservations")({
  component: Reservations,
});
