interface Props {
    icon: string | undefined
    main: string | undefined
    temp_max: number | undefined
    temp_min: number | undefined
    dateTime: Date | null
}

const Card = ({ icon, main, temp_max, temp_min, dateTime }: Props) => {
    return (
        <div
            className="rounded overflow-hidden shadow-lg"
            style={{
                backgroundColor: 'rgb(59 58 58)',
                color: 'white',
                font: 'Verdana',
                width: '14em',
                height: '350px',
            }}
        >
            <img
                style={{ width: '50%', margin: 'auto' }}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
                {main}
                <br />
                {dateTime?.toDateString()}
                <br />
                {dateTime?.toTimeString()}
                <br />
                min:{temp_min?.toFixed(2)}
                <br />
                max:{temp_max?.toFixed(2)}
                <br />
                {/* <p className="text-gray-700 text-base">
          asdfasdf
          </p> */}
            </div>
        </div>
    )
}
export default Card
