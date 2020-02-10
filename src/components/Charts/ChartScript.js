import React from 'react';
import BarChart from './BarChart';


export default class ChartScript extends React.Component {
	render() {
		const {pageArray,dataArray, dataLabels} = this.props
		return (
			<div className="chart-row">
                <div className="row transaction justify-content-center w-100">
                    <div className="col-12 px-3 mb-5">
						<div className="h-100 py-4 mediacl-bar-chart bar_line_chart_col">
                            <div className="chart-small">
								<BarChart 
									pageArray = {pageArray} 
									dataArray={dataArray} 
									dataLabels={dataLabels}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
