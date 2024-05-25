import React from 'react'

function MidButton({ buttons, filter, selected }) {
    return (
      <div className='flex pt-10 gap-5'>
        {buttons.map((item) => (
          <button
            className={selected === item.id ? 'pushable selected' : 'pushable'}
            key={item.id}
            onClick={() => filter(item.id)}
            
          >
            <span className={selected === item.id ? 'front2' : 'front'}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
    );
  }
  

export default MidButton