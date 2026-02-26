function TicketCard({ticket}) {
    const highStyle =
    ticket.priority === "High"
    ? { border: "2px solid red", background: "#ffe5e5" }
      : {}

  return (
    <div style={highStyle}>
      <p>{ticket.description}</p>
      <small>{ticket.priority}</small>
    </div>
  )
}

export default TicketCard
