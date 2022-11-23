import React from 'react'

const ItemList = () => {
    const [skins, setSkins] = useState([])
    useEffect(() =>{
         fetch("https://fakestoreapi.com/products")
            .then(data =>data.json())
                //.then((data) => setSkins(data.name))
                .then((data) => console.log(data))
    });

  return (
    <div>
        <ul>
            {skins.map((skins) =>(
                <li>{skins}</li>
            ))}
        </ul>
    </div>
  )
}

export default ItemList;