import React, { PureComponent, createRef } from "react"
import ClearBtn from './ClearBtn'
import SearchBar from './SearchBar'
import CityInfo from './CityInfo'

class Weather extends PureComponent {
   
  state = {
    weatherInfo: null,
    error: '',
    isLoading: false,
  }

  inputRef = createRef()

  loadWeather = async e => {
    e.preventDefault()

    const input = this.inputRef.current.value

    // if empty search
    if (input === '') {
      this.setState({ error: 'Please Enter City!'})
      return;
    }

    this.setState({ isLoading: true });
    const URL = `http://localhost:3000/weatherList?city=${input.charAt(0).toUpperCase() + input.slice(1)}`
    
    try {
      const res = await fetch(URL)
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data)
      }
      this.setState({
          weatherInfo: data[0],
          error: '',
          isLoading: false,
        });

    } catch (error) {
      this.setState({ error })
    }

  };

// clear Form
  reset = () => {
    this.setState({ weatherInfo: null, error: '' })
    this.inputRef.current.value = ''
  };

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col min-w-[300px]">
            <h1 className="text-center mb-8 text-2xl font-bold " > Weather App</h1>
            <SearchBar search={this.loadWeather} ref={this.inputRef} isLoading={this.state.isLoading} />
            { this.state.weatherInfo !== null && 
              <CityInfo info={this.state.weatherInfo} /> }
            { this.state.error && 
              <h1 className="self-center mt-2 text-red-600 font-serif font-bold">{this.state.error}</h1>}
            <ClearBtn reset={this.reset} isLoading={this.state.isLoading} />
        </div>
      </div>
    )
  }
}

export default Weather