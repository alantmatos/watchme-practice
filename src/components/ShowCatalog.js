import React from 'react';
import MyWatchList from './MyWatchList'
import ShowCard from './ShowCard';
import ShowList from './ShowList'

function ShowCatalog({showDataProp}) {

    //console.log(showDataProp)

    return(
        <>
        {
        showDataProp.map((show) => (  <ShowCard key={show.id} show={show} />
        ))
        }
 
            <MyWatchList showData={showDataProp} />
            <hr/>
            <ShowList showData={showDataProp}/>

        </>
    );
}

export default ShowCatalog;