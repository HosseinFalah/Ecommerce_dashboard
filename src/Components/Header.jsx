import React from 'react'

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className=" text-zinc-800 dark:text-zinc-200">
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</p>
    </div>
  )
}

export default Header