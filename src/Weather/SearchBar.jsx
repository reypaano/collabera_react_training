import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'

const Searchbar= forwardRef((props, ref) => (
  <form onSubmit={props.search} className="flex items-center">
  <input
    type="text"
    placeholder="Enter City..."
    ref={ref}
    className={`text-xs h-10 rounded-l-md flex-1 w-[200px] ${props.isLoading && 'opacity-25'}`}
    disabled={props.isLoading}
  />
  <button
    type="submit"
    className={`text-xs h-10 font-semibold px-5 rounded-r-md bg-blue-700 
      hover:bg-red-500 ${props.isLoading && 'opacity-25 pointer-events-none'}`}
    disabled={props.isLoading}
  >
    Search
  </button>
</form>
))

Searchbar.propTypes = {
  search: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default memo(Searchbar)