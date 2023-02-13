import React, { memo } from 'react'
import PropTypes from 'prop-types'

const CityInfo = ({ info }) => ( 
  <ul className="w-[200px] bg-white shadow-md rounded-md self-center mt-5 p-4">
    <li className="text-sm font-bold">ID: {info.id}</li>
    <li className="text-sm font-bold">City: {info.city}</li>
    <li className="text-sm font-bold">Temperature: {`${info.temp} °${info.tempType}`}</li>
  </ul>
);

CityInfo.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    temp: PropTypes.number,
    tempType: PropTypes.string,
  }).isRequired,
};

export default memo(CityInfo)
