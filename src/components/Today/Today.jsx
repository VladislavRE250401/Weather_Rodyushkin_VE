import './Today.css';

const Today = (data) => {
	
	function capitalize(string) {
        return string && string[0].toUpperCase() + string.slice(1);
      }

    let icon = (data?.data?.weather[0]?.icon)

    return (

        <div >
            <div className='City'>
                Саранск
            </div>
            <div className='Icon-temp'>
                <div className="jpg">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='' />
                </div>
                <div className='Temp'>
                    {data?.data?.temp.toFixed()}°
                </div>
            </div>
            <div className='Description'>
                {capitalize(data?.data?.weather[0].description)}
            </div>
        </div>
    )
}

export default Today