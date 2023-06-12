import React from 'react'

const CrudPage = () => {
  return (
    <>
    <main className="row">
        <article className="col">
            <h1>CRUD</h1>
        </article>
    </main>
    <section className="row">
        <article className="col">
            <button type='button' className='btn btn-success'>Agregar</button>
           <div>
  <button type="button" className="btn btn-danger">Danger</button>
  <button type="button" className="btn btn-warning">Warning</button>
  <button type="button" className="btn btn-info">Info</button>
</div>

        </article>
    </section>
    </>
  )
}

export default CrudPage