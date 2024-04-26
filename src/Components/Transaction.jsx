import React from 'react'

const Transaction = (e) => {
  return (
    <div>
        <div>
            <h3>History</h3>
            <ul>
              {e.text} <li><span>{e.amount}</span> <button>Delete</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Transaction