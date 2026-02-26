import { useTickets } from './hooks/useTicket'
import TicketForm from './components/TicketForm'
import DashboardLayout from './components/DashboardLayout'
import TicketList from './components/TicketList'

function App() {
  const { tickets, isLoading, error, addTicket } = useTickets()

  return (
    <DashboardLayout>
      <TicketForm
        addTicket={addTicket}
        isLoading={isLoading}
        error={error}

      />
      <TicketList tickets={tickets} />
    </DashboardLayout>
  )
}

export default App;



