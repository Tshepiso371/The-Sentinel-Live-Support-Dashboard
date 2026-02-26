import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";

export function useTickets() {
    const [tickets, setTickets] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true 

        async function fetchTickets() {
            setIsLoading(true)

            try {
                const data = await apiClient.get("/tickets")
                if (isMounted) {
                    setTickets(data)
                }
            }
            catch (err){
                if (isMounted) {
                    setError(err.message)
                }

            }
            finally {
                if (isMounted){
                    setIsLoading(false)
                }
            }


        }

        fetchTickets()

    return () => {
      isMounted = false
    }
  }, [])

  /
  function addTicket(newTicket) {
    setIsLoading(true)
    setError(null)

    
    if (newTicket.description.length < 20) {
      setError("Description is too short. Minimum 20 characters required.")
      setIsLoading(false)
      return
    }

    setTimeout(() => {
      const ticketWithId = {
        ...newTicket,
        id: crypto.randomUUID()
      }

      
      setTickets(prev => [...prev, ticketWithId])
      setIsLoading(false)
    }, 2000)
  }

  return {
    tickets,
    isLoading,
    error,
    addTicket
  }
}
    