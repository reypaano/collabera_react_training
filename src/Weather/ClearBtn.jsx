import React, { memo } from 'react'
import PropTypes from 'prop-types'

const ClearBtn = props => (
  <button
    onClick={props.reset}
    className={`text-whitetext-xs font-semibold bg-red-400  
      px-5 py-2 mt-8 rounded-md text-center w-fit self-center
      shadow-md hover:bg-red-600 ${props.isLoading && 'opacity-25 '}`}
  >
    Clear Search
  </button>
)


ClearBtn.propTypes = {
  reset: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default memo(ClearBtn);
