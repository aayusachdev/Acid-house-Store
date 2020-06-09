import React from 'react'
import CollectionItem from './Collection-item.component'
import "../Styles/Collection.style.scss";


const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-container">
      <h1 className="collection__title">{title.toUpperCase()}</h1>
      <div className="collection__preview">

        {/* The Best part about writing code functionally like this, is that we can
        modify the array and pass it in the same way.

        This is performance concern is the array gets very large and slower computers.
        These anonymous func gets called everytime the component gets rendered or re-rendered.

        */}
        {
          items
            .filter((item) => item.id < 5)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;