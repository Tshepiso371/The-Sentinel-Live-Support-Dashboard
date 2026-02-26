import TicketCard from "./TicketCard";

function TicketList({tickets}) {
    return (
        <div>
            {tickets.map(tickets => (
                <TicketCard key={tickets.id} ticket={ticket} />
            ))}
        </div>
    )
}

export default TicketList