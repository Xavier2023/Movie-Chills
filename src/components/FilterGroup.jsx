import React from 'react'

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <div>
        <ul className='align_center movie_filter'>
            {ratings.map(rate => (
                <li className={minRating === rate ? 'movie_filter_item active' : 'movie_filter_item'} onClick={() => onRatingClick(rate)} key={rate}>{rate}+ Star</li>
            ))}
        </ul>
    </div>
  )
}

export default FilterGroup