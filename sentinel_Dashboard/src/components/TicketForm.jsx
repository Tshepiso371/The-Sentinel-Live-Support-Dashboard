import { useState } from "react"

function TicketForm({ addTicket, isLoading, error }) {
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("Low")

  function handleSubmit(e) {
    e.preventDefault()

    addTicket({
      description,
      priority
    })

    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button disabled={isLoading}>
        {isLoading ? "Saving..." : "Submit"}
      </button>
    </form>
  )
}

export default TicketForm