import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.setYear(year)
  }

  render() {
    const { photos, year } = this.props
    return (
      <div>
        <p>
          Photos: {photos.length}. Year : {year}
        </p>
        <div>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2016</button>
          <button onClick={this.onBtnClick}>2015</button>
          <button onClick={this.onBtnClick}>2014</button>
        </div>
      </div>
    )
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
}
