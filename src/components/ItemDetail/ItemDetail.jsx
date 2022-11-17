import React from 'react'
import { useState, useEffect } from 'react'


const ItemDetail = () => {
    const [skins, setSkins] = useState([])
    useEffect(() =>{
         fetch("https://bitskins.com/api/v1/get_all_item_prices/?api_key=5bb0d576-3055-4210-b7fc-f7aaf34bc827&code=088737&app_id=730")
            .then(data =>data.json()
                ).then((data) => setSkins(data.market_hash_name))
    })
  return (
    <div>
        <ul>
            {skins.map((skins) =>(
                <li>{skins.market_hash_name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ItemDetail;