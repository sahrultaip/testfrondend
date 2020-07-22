import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Button} from 'reactstrap';
import Select from 'react-select'
// import {Line, Pie} from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import options from './options.json';
import backgroundrepeat from '../../assets/img/bg-repeat.JPG';
import slide1 from '../../assets/img/slide1.jpg';
import slide2 from '../../assets/img/slide2.png';
import slide3 from '../../assets/img/slide3.jpg';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scurl: '',
    }

    this.toggle = this.toggle.bind(this);
    this.shortCutClick = this.shortCutClick.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  shortCutClick() {
    // console.log(this.state.scurl,'click')
    if(this.state.scurl.length > 0) {
      this.props.history.push(this.state.scurl);
    }
  }

  onChangeSc = (option) => {
    var url = '';
    if(option){
      url = option.value;
    }
    this.setState({scurl: url})
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    // const options = [
    //   { value: 'chocolate', label: 'Pendaftaran Tempat Pelayanan KB' },
    //   { value: 'strawberry', label: 'Register Pelayanan KB' },
    //   { value: 'vanilla', label: 'Mutasi Alokon' }
    // ]

    // const pie2 = {
    //   labels: ['Param1', 'Param2', 'Param3'],
    //   datasets: [{
    //     data: [10,8,22],
    //     backgroundColor: ['#4AADFF','#49FF4A', '#FF9F48']
    //   }],
    // }

    // const optionspie = {
    //   maintainAspectRatio: false,
    //   responsive: false,
    //   legend: {
    //     position: 'top',
    //     labels: {
    //       boxWidth: 10,
    //       fontSize: 10,
    //     }
    //   },
    //   plugins: {
    //     labels: {
    //       render: 'value',
    //       fontSize: 12,
    //       fontColor: '#000',
    //     }
    //   }
    // }

    // const data1 = {
    //   labels: ['18', '19', '20', '21', '22', '23'],
    //   datasets: [
    //     {
    //       label: 'Param1',
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(74,255,160,.6)',
    //       borderColor: 'rgb(153,204,153)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgb(153,204,153)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgb(153,204,153)',
    //       pointHoverBorderColor: 'rgba(74,255,160,.6)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [15, 25, 0, 8, 15, 15, 35]
    //     },
    //   ]
    // };

    // var options1 = {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true,
    //         min: 0,
    //         stepSize: 10
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Quantity'
    //       }    
    //     }],
    //     xAxes: [{
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Date'
    //       }
    //     }],
    //   },
    //   legend: {
    //     position: 'top',
    //     labels: {
    //       boxWidth: 10,
    //       fontSize: 10,
    //     }
    //   }
    // };

    // const data2 = {
    //   labels: ['18', '19', '20', '21', '22', '23'],
    //   datasets: [
    //     {
    //       label: 'Param1',
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(74,255,160,.6)',
    //       borderColor: 'rgb(153,204,153)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgb(153,204,153)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgb(153,204,153)',
    //       pointHoverBorderColor: 'rgba(74,255,160,.6)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [30, 32, 33, 6, 42, 15, 37]
    //     },
    //     {
    //       label: 'Param2',
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(255,72,72,.6)',
    //       borderColor: 'rgba(255,35,35,.8)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgba(255,35,35,.8)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgba(255,35,35,.8)',
    //       pointHoverBorderColor: 'rgba(255,72,72,.6)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [5, 8, 0, 25, 3, 10, 3]
    //     }
    //   ]
    // };

    // var options2 = {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true,
    //         min: 0,
    //         stepSize: 10
    //       },
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Quantity'
    //       }    
    //     }],
    //     xAxes: [{
    //       scaleLabel: {
    //         display: true,
    //         labelString: 'Date'
    //       }
    //     }],
    //   },
    //   legend: {
    //     position: 'top',
    //     labels: {
    //       boxWidth: 10,
    //       fontSize: 10,
    //     }
    //   }
    // };

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card style={{margin:'0'}}>
              <CardBody className="card-body-nopad">
              <Row style={{background: 'linear-gradient(to top, #2274A5, #fff)'}}>
                  <Col lg="2" className="d-none d-lg-block"></Col>
                  <Col sm="12" lg="8">
                    <CarouselProvider
                      naturalSlideWidth={600}
                      naturalSlideHeight={310}
                      totalSlides={3}
                      step={1}
                      isPlaying={true}
                      interval={4500}
                    >
                      <Slider>
                        <Slide index={0}><img src={slide1} alt=""  className="imgBg"/></Slide>
                        <Slide index={1}><img src={slide2} alt=""  className="imgBg"/></Slide>
                        <Slide index={2}><img src={slide3} alt=""  className="imgBg"/></Slide>
                      </Slider>
                      <DotGroup className="prcDot"/>
                    </CarouselProvider>
                  </Col>
                  <Col lg="2" className="d-none d-lg-block"></Col>
                </Row>
              </CardBody>
            </Card>
            <Card style={{backgroundImage: `url(${backgroundrepeat})`}}>
              <CardBody>
                <Row>
                  <Col xs="12" lg="4">
                    <Row>
                      <Col xs="12">
                        <span style={{fontSize:'12px'}}>Shortcut Menu</span>
                        <Select options={options} maxMenuHeight={160} onChange={this.onChangeSc} isClearable={options} className="selectSend"/>
                        <Button className="btn btnSend" onClick={this.shortCutClick}><i className="icon-arrow-right15" style={{marginTop:'0'}}></i></Button>
                        <span className="text-muted" style={{fontSize:'12px'}}><i>*Cara singkat untuk mengakses menu</i></span>
                      </Col>
                      <Col xs="12" className="d-block d-md-none"><hr style={{borderBottom:'1px solid orange'}}/></Col>
                    </Row>
                  </Col>
                  <Col xs="12" lg="8">
                    <Row>
                      <Col lg="12">
                        <span style={{fontSize:'12px'}}>Favorit Menu</span>
                      </Col>
                      <Col xs="6" lg="4">
                        <div className="iclear"><i className="icon-cross3"></i></div>
                        <Button className="btnCardMenu"><i className="icon-clipboard3"></i><div>Menu Satu</div></Button>
                      </Col>
                      <Col xs="6" lg="4">
                        <div className="iclear"><i className="icon-cross3"></i></div>
                        <Button className="btnCardMenuRed"><i className="icon-lan"></i><div>Menu Dua</div></Button>
                      </Col>
                      <Col xs="6" lg="4">
                        <div className="iclear"><i className="icon-cross3"></i></div>
                        <Button className="btnCardMenuGreen"><i className="icon-man-woman"></i><div>Menu Tiga</div></Button>
                      </Col>
                      <Col xs="6" lg="4">
                        <div className="iclear"><i className="icon-cross3"></i></div>
                        <Button className="btnCardMenuYellow"><i className="icon-truck"></i><div>Menu Empat</div></Button>
                      </Col>
                      <Col xs="6" lg="4">
                        <Button className="btnCardMenu btnEmpty"><i className="icon-star-empty3"></i><div>Tersedia</div></Button>
                      </Col>
                      <Col xs="6" lg="4">
                        <Button className="btnCardMenu btnEmpty"><i className="icon-star-empty3"></i><div>Tersedia</div></Button>
                      </Col>
                    </Row>
                  </Col>
                  {/* <Col xs="12" lg="8">
                    <Row>
                      <Col xs="6" lg="6">
                        <Card className="mb10px" style={{minHeight: "50px"}}>
                          <CardBody style={{backgroundColor: '#ff6961', minHeight: '50px', color: 'white'}} className="card-body-pad7">
                            <div style={{width: '100%', height: '50px', textAlign: 'center'}}>
                              <div style={{fontSize:'22px', fontWeight: 'bold', lineHeight: '28px'}}>2,913</div>
                              <div style={{fontWeight: 'bold'}}>Total TP KB</div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xs="6" lg="6">
                        <Card className="mb10px" style={{minHeight: "50px"}}>
                          <CardBody style={{backgroundColor: '#ff6961', minHeight: '50px', color: 'white'}} className="card-body-pad7">
                            <div style={{width: '100%', height: '50px', textAlign: 'center'}}>
                              <div style={{fontSize:'22px', fontWeight: 'bold', lineHeight: '28px'}}>12,083</div>
                              <div style={{fontWeight: 'bold'}}>Total SDM</div>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="mb10px" style={{minHeight: "218px"}}>
                          <CardHeader className="cardBgWhite">
                            <i className="icon-store"></i>Sample Number
                            <div className="card-header-actions">
                                <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                            </div>
                          </CardHeader>
                          <CardBody style={{backgroundColor: '#fff'}} className="card-body-pad7">
                            <div style={{width: '100%', height: '95px', textAlign: 'center'}}>
                              <div style={{fontSize:'32px', fontWeight: 'bold', lineHeight: '40px', paddingTop:'10px'}}>71</div>
                              <div style={{fontWeight: 'bold'}}>Total AB</div>
                            </div>
                            <div style={{width: '100%'}}>
                              <Row style={{margin:"-8px"}}>
                                <Col xs="6" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '110px'}}>
                                  <div style={{fontSize:'18px', color: 'blue', fontWeight: 'bold', lineHeight: '25px', paddingTop:'30px'}}>41</div>
                                  <div style={{color: 'blue'}}>Text A</div>
                                </Col>
                                <Col xs="6" style={{textAlign: 'center', border: '1px solid #c8ced3', height: '110px'}}>
                                  <div style={{fontSize:'18px', color: 'red', fontWeight: 'bold', lineHeight: '25px', paddingTop:'30px'}}>30</div>
                                  <div style={{color: 'red'}}>Text B</div>
                                </Col>
                              </Row>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="mb10px" style={{minHeight: "218px"}}>
                          <CardHeader className="cardBgWhite">
                            <i className="icon-direction"></i>Sample Pie Chart
                            <div className="card-header-actions">
                                <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                            </div>
                          </CardHeader>
                          <CardBody className="card-body-pad7" style={{backgroundColor: '#fff', display: 'flex', justifyContent: 'center'}}>
                            <Pie data={pie2} height={190} width={250} options={optionspie}/>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="mb10px" style={{minHeight: "218px"}}>
                          <CardHeader className="cardBgWhite">
                            <i className="icon-alarm"></i>Sample Line Chart
                            <div className="card-header-actions">
                                <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                            </div>
                          </CardHeader>
                          <CardBody  className="card-body-pad7" style={{backgroundColor: '#fff'}}>
                            <Line data={data1} options={options1} />
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="mb10px" style={{minHeight: "218px"}}>
                          <CardHeader className="cardBgWhite">
                            <i className="icon-alarm"></i>Sample Line Chart
                            <div className="card-header-actions">
                                <a className="card-header-action btn btn-close"><i className="icon-enlarge"></i></a>
                            </div>
                          </CardHeader>
                          <CardBody  className="card-body-pad7" style={{backgroundColor: '#fff'}}>
                            <Line data={data2} options={options2} />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Dashboard;