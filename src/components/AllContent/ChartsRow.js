import React from 'react';

const ChartsRow = () => {
    return (
        <div class="chart-row">
                
                <div class="row transaction justify-content-center w-100">
                    
                    <div class="col-12 px-3 mb-5 ">

                        <div class="h-100 py-4 mediacl-bar-chart bar_line_chart_col">
                            <div class="chart-small">
                                <canvas width="1103" height="450" style={{display: 'block', height: 441 + 'px', width: 883 +'px'}} id="bar-chart"></canvas>
                            </div>
                        </div>
 
                        <div class="circle-chart-col notaries-circle-chart-col d-none">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6 px-1 mt-3">
                                    <div class="card card-teal">
                                        <div class="card-header bg-teal pr-3" id="circle_title0">
                                          
                                        </div>
                                        <div id="circle-body-no0" class="card-body text-center my-2 p-2">
                                            <span class="text-teal"></span>                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-1 mt-3">
                                    <div class="card card-cyan">
                                        <div class="card-header bg-cyan pr-3" id="circle_title1">
                           
                                        </div>
                                        <div id="circle-body-no1" class="card-body text-center my-2 p-2">
                                            <span class="text-cyan"></span> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-1 mt-3">
                                    <div class="card card-light-red">
                                        <div class="card-header bg-light-red pr-3" id="circle_title2">
      
                                        </div>
                                        <div id="circle-body-no2" class="card-body text-center my-2 p-2">
                                            <span class="text-light-red"></span>                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="half-chart-col notaries-half-chart-col d-none">
                            <div class="row justify-content-center">
                                <div class="col-12 px-1 mt-3">
                                    <div class="card card-teal">
                                        <div class="card-header bg-teal pr-3" id="half_title0">
                                           
                                        </div>
                                        <div id="next-half-body" class="card-body text-center my-2 p-2">
                                            <canvas width="80" height="50" class="mh-100 mw-100" id="half_chart_no0"></canvas>
                                                <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 px-1 mt-3">
                                    <div class="card card-cyan">
                                        <div class="card-header bg-cyan pr-3" id="half_title1">
                                            
                                        </div>
                                        <div id="next-half-body" class="card-body text-center my-2 p-2">
                                            <canvas width="80" height="50" class="mh-100 mw-100" id="half_chart_no1"></canvas>
                                                <span></span>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 px-1 mt-3">
                                    <div class="card card-light-red">
                                        <div class="card-header bg-light-red pr-3" id="half_title2">
                                            
                                        </div>
                                        <div id="next-half-body" class="card-body text-center my-2 p-2">
                                            <canvas width="80" height="50" class="mh-100 mw-100" id="half_chart_no2"></canvas>
                                                <span></span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>

    )}
export default ChartsRow