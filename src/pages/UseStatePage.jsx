import { useState } from "react"
import axios from "axios"

const UseStatePage = () => {
    const [customers, setCustomers] = useState ([])
    const obtnerUsuarios = async () => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(resp.data)
        setCustomers(resp.data)
    }

  return (
    <>
    <header className="row">
        <article className="col">
            <h1>UseStatePage</h1>
        </article>
    </header>
    <main className="row">
        <article className="col">
        <button type="button" className="btn btn-primary" onClick={obtnerUsuarios}>Obtener usuarios</button>
        </article>
    </main>
    <section className="row">
        <article className="col">
      <ul className="list-group">
        {
            customers.map((customers) => (
                <li key={customers.id} className="list-group-item">{customers.name}</li>
            ) )
        }
  
 
</ul>
     </article>
    </section>
    </>
  )
  
}

export default UseStatePage