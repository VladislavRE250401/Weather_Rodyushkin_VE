import './Details.css'
import Vector from '../../assets/Vector.svg'
import Sunrise from '../../assets/Sunrise.svg'
import Sunset from '../../assets/Sunset.svg'

function Details(data) {

    var sunrise = data?.data?.sunrise; 

    var t1 = new Date(sunrise * 1000);
    var sun_r = ("0" + t1.getHours()).slice(-2) + ":" + ("0" + t1.getMinutes()).slice(-2);

    var sunset = data?.data?.sunset; 

    var t2 = new Date(sunset * 1000);
    var sun_s = ("0" + t2.getHours()).slice(-2) + ":" + ("0" + t2.getMinutes()).slice(-2);

    return (
        <div>
            <div className="title">
                Подробности
            </div>
            <div className='line1'></div>
            <div className="line2"></div>
            <div className="feels-like">
                <div className="feels">
                    По ощущениям
                </div>
                <div className="like">
                    {data?.data?.feels_like?.day.toFixed()}°
                </div>
            </div>
            <div className="pressure">
                <div className='pres-title'>
                    Давление
                </div>
                <div className="pres-number">
                    {(data?.data?.pressure/1.333).toFixed(2)} мм
                </div>
            </div>
            <div className="humidity">
                <div className="hum-title">
                    Влажность
                </div>
                <div className="hum-number">
                    {data?.data?.humidity}%
                </div>
            </div>
            <div className="wind">
                <div className="wind-title">
                    Ветер
                </div>
                <div className="wind-info">
                    <div className="wind-icon-number">
                        <img src={Vector} alt='' />
                        {data?.data?.wind_speed.toFixed(1)} м/c
                    </div>
                </div>
            </div>
            <div className="precipitation">
                <div className="pre-title">
                    Осадки
                </div>
                <div className='pre-number'>
				    {(data?.data?.pop)*100} %
                </div>
            </div>
            <div className="sunrise">
                <div className="sunrise-title">
                    Восход
                </div>
                <div className="sunrise-info">
                    <div className="sunrise-time">
                        {sun_r}
                    </div>
                    <div className="sunrise-icon">
                        <img src={Sunrise} alt=''/>
                    </div>
                </div>
            </div>

            <div className="sunset">
                <div className="sunset-title">
                    Закат
                </div>
                <div className="sunset-info">
                    <div className="sunset-time">
                        {sun_s}
                    </div>
                    <div className="sunset-icon">
                        <img src={Sunset} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details