import React from 'react'
import { Col, Container, Row, Button, Carousel, Image } from "react-bootstrap"
import './Home.css';
import el_c1 from "../static/images/el_c1.svg";
import el_c2 from "../static/images/el_c2.svg";
import el_c3 from "../static/images/el_c3.svg";
import google_logo from "../static/images/google_logo.png";
import insta_logo from "../static/images/insta_logo.png";
import Pinterest from "../static/images/Pinterest-Logo.png";
import Spotify_Logo from "../static/images/Spotify_Logo.png";
import FacebookLogo from "../static/images/Facebook-Logo.png";
import youtube from "../static/images/youtube.png";
import Hi from "../static/images/Hi.png";
import CourseCard from './CourseCard'

function Home() {
    return (
        <Container fluid>

            {/* R1 - Intro */}
            <Row className="green">
                <Col xl={5} lg={5} md={5} sm={6} xs={6} className="center_div">
                    <div style={{ marginTop: "10vmax", marginLeft: "4vmax" }}>
                        <h1 className="sans home_headings">Bonjour!<Image style={{ height: '1.5em' }} src={Hi} /></h1>
                        <br />
                        <h5 className="lora" style={{ fontSize: '2em' }}>Planning to upskill?</h5>
                        <h5 className="lora" style={{ fontSize: '2em' }}>You're at the right place!!</h5>
                    </div>
                    <Button className="lora" size="lg" style={{ marginTop: "3vmax", marginLeft: "4vmax", color: "FF0066" }}>
                        SignUp</Button>
                </Col>
                <Col>

                    {/* Image on svg */}
                    {/* Blob here */}
                    {/* <div class="svg-container">
                        <svg
                            style={{ height: "40vmax", width: "40vmax", margin: "0vmax", padding: "0vmax"}}
                            class="img_responsive" 
                            viewBox="0 0 200 200"                             
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FF0066" d="M60.9,-21.9C68,1.8,55,29.8,36.5,41.1C18,52.4,-6,46.9,-24,33.6C-42,20.4,-54,-0.5,-49,-21.4C-44,-42.3,-22,-63.2,2.5,-64C27,-64.8,53.9,-45.5,60.9,-21.9Z" transform="translate(100 100)" />
                        </svg>
                    </div> */}

                    <Carousel fade
                        style={{ height: "40vmax", width: "40vmax", marginTop: "3vmax", padding: "0vmax" }}
                    >
                        <Carousel.Item
                        // interval={1000}
                        >
                            <img
                                className="d-block w-100"
                                src={el_c1}
                                alt="First slide"
                            />

                            {/* <Carousel.Caption variant="dark">
                                <h3>100+ Quality courses</h3>
                            </Carousel.Caption> */}

                        </Carousel.Item>
                        <Carousel.Item
                        //  interval={500}
                        >
                            <img
                                className="d-block w-100"
                                src={el_c2}
                                alt="Second slide"
                            />

                            {/* <Carousel.Caption variant="dark">
                                <h3>Study at your time and place of convenience</h3>
                            </Carousel.Caption> */}

                        </Carousel.Item>
                        <Carousel.Item
                        // interval={100}
                        >
                            <img
                                className="d-block w-100"
                                src={el_c3}
                                // src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            {/* <Carousel.Caption variant="dark">
                                <h3>Upskill straight from Top Industry Leaders</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>

            {/* R2 - Clients */}
            <Row className="yellow center_div"  >
                {/* Curve SVG HERE */}
                <svg class="img_responsive waves" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320" width="1000em"
                >
                    <path fill="#5fffff" fill-opacity="1" d="M0,192L48,160C96,128,192,64,288,64C384,64,480,128,576,176C672,224,768,256,864,250.7C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path>
                </svg>
                <Col></Col>

                <Col xs={12} md={8} lg={10}>
                    <h2 className="center_text sans home_headings" >We work with</h2>
                    <Image className="client_logo" src={google_logo} />
                    <Image className="client_logo" src={insta_logo} />
                    <Image className="client_logo" src={Spotify_Logo} />
                    <Image className="client_logo" src={Pinterest} />
                    <Image className="client_logo" src={FacebookLogo} />
                    <Image className="client_logo" src={youtube} />
                </Col>
                <Col></Col>
            </Row>

            {/* R3 - Flaunt your numbers */}
            <Row className="dark_blue">

                {/* Curve SVG HERE */}
                <svg className="img_responsive waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="yellow" fill-opacity="1" d="M0,224L30,197.3C60,171,120,117,180,90.7C240,64,300,64,360,101.3C420,139,480,213,540,224C600,235,660,181,720,165.3C780,149,840,171,900,197.3C960,224,1020,256,1080,250.7C1140,245,1200,203,1260,165.3C1320,128,1380,96,1410,80L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

                <Col></Col>

                <Col xs={12} md={8} lg={10}>
                    <h2 className="white_text center_text sans home_headings" >Join in something big!</h2>
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 className="white_text lora home_sub_heading">1M+ Learners</h1>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 className="white_text lora home_sub_heading">10+ Countries</h1>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <h1 className="white_text lora home_sub_heading">100+ Instructors</h1>
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Col>
                <Col></Col>
            </Row>

            {/* R4 - Popular Courses */}
            <Row className="pink">

                <svg className="img_responsive waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#3A10E5" fill-opacity="1" d="M0,128L30,154.7C60,181,120,235,180,224C240,213,300,139,360,96C420,53,480,43,540,69.3C600,96,660,160,720,176C780,192,840,160,900,149.3C960,139,1020,149,1080,154.7C1140,160,1200,160,1260,165.3C1320,171,1380,181,1410,186.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

                <Col></Col>

                <Col xs={12} md={8} lg={10}>
                    <h2 className="white_text center_text sans home_headings" >Popular courses</h2>
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <CourseCard />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <CourseCard />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <CourseCard />
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>

            {/* R5 - Student reviews */}
            <Row>

            </Row>

            {/* R6 - Footer */}

        </Container>
    )
}

export default Home
