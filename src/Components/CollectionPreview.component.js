import React from 'react'

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
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
            .map((item) => (
              <div key={item.id}>
                {item.name}
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview;