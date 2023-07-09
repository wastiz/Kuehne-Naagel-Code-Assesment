import './AppInfo.scss'
function AppInfo ({total, shipped, inTransit, delivered}) {
    return (
        <div className='app-info-div'>
            <h2>Total orders: {total}</h2>
            <h3>Shipped: {shipped}</h3>
            <h3>In transit: {inTransit}</h3>
            <h3>Delivered: {delivered}</h3>
        </div>
    )
}

export default AppInfo;