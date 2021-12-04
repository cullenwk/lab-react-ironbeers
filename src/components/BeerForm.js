// import {useState, useEffect} from 'react'
// import {useParams, Link} from 'react-router-dom'
// import {Spinner} from 'react-bootstrap'
// import axios from 'axios'

// function BeerForm() {
//     const {beerId} = useParams()

//     const [beerDetail, setBeerDetail] = useState(null)

//     // This will run just ONCE after the component has mounted
//     useEffect(() => {
//         const getData = async () => {
//            // Fetching info for a single todo  
//            let response = await axios.get(`http://localhost:5005/api/todos/${beerId}`)
//            setBeerDetail(response.data)
//         }
//         getData()
//     }, [])

//     if(!beerDetail) {
//         return (
//             <>
//             <Spinner animation="grow" variant="primary" />
//             <Spinner animation="grow" variant="secondary" />
//             <Spinner animation="grow" variant="success" />
//             <Spinner animation="grow" variant="danger" />
//             <Spinner animation="grow" variant="warning" />
//             <Spinner animation="grow" variant="info" />
//             <Spinner animation="grow" variant="light" />
//             <Spinner animation="grow" variant="dark" />
//         </>
//         )
//     }

//     // const {btnEdit} = props

//     return (
//         <div className="AddApartmentPage">
//   <Header/>
//       <h3>Add New Beer</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />
//         <label>tagline</label>
//         <input
//           type="text"
//           name="tagline"
//           onChange={(e) => setTagline(e.target.value)}
//           value={tagline}
//         />
//         <label>description</label>
//         <input
//           type="text"
//           name="description"
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//         />
//         <label>first brewed</label>
//         <input
//           type="text"
//           name="first_brewed"
//           onChange={(e) => setFirst_brewed(e.target.value)}
//           value={first_brewed}
//         />
//         <label>attenuation level</label>
//         <input
//           type="number"
//           name="attenuation_level"
//           onChange={(e) => setAttenuation_level(e.target.value)}
//           value={attenuation_level}
//         />

//         <label>contributed by</label>
//         <input
//           type="text"
//           name="contributed_by"
//           onChange={(e) => setContributed_by(e.target.value)}
//           value={contributed_by}
//         />

//         <button type="submit">Create new Beer</button>

//       </form>
//     </div>
//     )
// }
// export default  BeerForm