import React from 'react'
import stock from '../Dummydata/watchlist'
import WatchListComp from './WatchListComp'
class WatchList extends React.Component{
	render(){
		return(<div>
			{stock.map(item=>(
				<WatchListComp 
					name={item.name}
					change={item.change}
					price={item.price}
				/>))
			}
		</div>)
	}
}

export default WatchList