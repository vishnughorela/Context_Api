import { useState, useEffect } from "react";
// import './ApiDummy.css'; // Import the CSS file

function ApiDummy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data.products);
        console.log("setData", data.products);
      });
  }, []);

  return (
    <div className="maindiv">
      <h1 className="title">A.P.I Call</h1>
      <table className="maintable">
        <thead>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map(product => (
            <tr key={product.id}>
              <td>
                <img className="product-image" src={product.images[0]} alt={product.title} />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiDummy;










// import { useState, useEffect } from "react";

// function ApiDummy() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setData(data.products);
//         console.log("setData", data.products);
//       });
//   }, []);

//   return (
//     <>
//       <div className="maindiv">
//         A.P.I call
//         <table className="maintable">
//           <thead>
//             <tr >
//               <th className="tablestyle border-2">Images</th>
//               <th className="tablestyle  text-center border-2">Title</th>
//               <th className="tablestyle border-2">Price</th>
//               <th className="tablestyle border-2">Stock</th>
//               <th className="tablestyle text-center border-2 ">Description</th>
//               <th className="tablestyle border-2">Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(product => (
//               <tr key={product.id}>
//                 <td>                             
//                   {/* {product.images.map(image => (
//                     <img className="pt-2" key={image} src={image} alt={image}/>
                    
//                     ))} */}

//                     <img src={product.images[0]}></img>
//                 </td>
//                 <td className="  p-4  border-e-2 text-center " >{product.title}</td>
//                 <td className="  p-4  border-e-2">{product.price}</td>
//                 <td className="  p-4  border-e-2">{product.stock}</td>
//                 <td className="  p-4  border-e-2 text-center">{product.description}</td>
//                 <td className="  p-4  ">{product.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table> 
        
//       </div>
//     </>
//   );
// }

// export default ApiDummy;

















// import { useState, useEffect } from "react";

// function Dummy() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setData(data.products);
//         console.log("setData", data.products);
//       })
      
      
//   }, []);

//   return (
//     <>
//       <div className="bg-gray-600 p-4 text-white text-center text-2xl pt-5">
//         A.P.I call
//         <p>
//           {data.map(product => (
//             <div key={product.id}>
            
//             <tr>
//             <td> {product.images.map(images=>(

//               <img key={images} src={images }/>

//            ) )} 

//            {/* <td>
//            {product.images.map(image => (
//                       <img key={image} src={image} alt={image} />
//                     ))} */}

//             {/* <img src={product.images } /> */}
//             </td> 
//             <td>{product.title}</td> 

//             <td>{product.price} </td> 
//             <td>{product.stock} </td> 
//             <td>{product.description} </td> 
//             <td>{product.category} </td> 

//                 </tr>
            
//             </div>
//           ))}
//         </p>
//       </div>
//     </>
//   );
// }

// export default Dummy;







































// import React from "react"
// function Dummy() {
//     const [data, setData1] = React.useState([])
//    React.useEffect(() => {
//       fetch('https://dummyjson.com/products')
//       // fetch('https://api.github.com/users/hiteshchoudhary')
//       // fetch('https://jsonplaceholder.typicode.com/todos/1')


//          .then(rasponse => rasponse.json())
//          .then(data => {
//                 setData1(data .products)
//                 console.log("setData1", data.products)
//              })
//        }, [])
//       return ( 
//               <>
        
//           <div className="bg-gray-600 p-4 text-white  text-center  text-2xl ...  pt-5"> A.P.I coll
//            {/* {data.followers}<br/> */}
//            {/* {data.userId}<br/> */}
//            {/* {data.stock}<br/> */}
//            {/* {data.images}<br/> */}
//           <p>
//             {data.products}
//             </p>
//             {/* <p>{data.product.price}</p> */}
//          </div>
//     </>   
//   )
// }

// export default Dummy


// import { useState, useEffect } from "react";

// function Dummy() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setData(data.products);
//         console.log("setData", data.products);
//       })
      
      
//   }, []);

//   return (
//     <>
//       <div className="bg-gray-600 p-4 text-white text-center text-2xl pt-5">
//         A.P.I call
//         <p>
//           {data.map(product => (
//             <div key={product.id}>
//               {/* <p>{product.name}</p> */}
//               <p>{product.price}</p>
//               <p>{product.images}</p>
//               <p>{product.rating}</p>
//               <p>{product.stock}</p>
             
//             </div>
//           ))}
//         </p>
//       </div>
//     </>
//   );
// }

// export default Dummy;



















// // import React from 'react'

// // import Products from "./product"

// import { useEffect } from "react"
// const Dummy =()=> {
    

//     useEffect(()=>{
//         fetch('https://dummyjson.com/products')
//         .then(res =>(res.data))
//         .catch(err => (err))
//     },[])

//   return (
//     <div> 
//  {    
//      data.map (items => <Products Products={products}/>)
//  }

//     </div>
//   )
// }

// export default Dummy



