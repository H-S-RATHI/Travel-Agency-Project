import React from 'react'
import '../styles/home.css'
import {Container, Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
const Home = () => {
  return (<>
  {/*================ Hero Section Start================ */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'know Before you Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className="highlight">Memories</span></h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor in nisi mollitia qui vitae optio facere debitis accusantium omnis maiores quod non soluta similique voluptates, tempore praesentium saepe perferendis obcaecati!</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt=""/>
            </div> 
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
            </div> 
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt=""/>
            </div> 
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg="3">
          <h5 className="services__subtitle">What we Serve</h5>
          <h2 className="services__title">we offer our best Services</h2>
        </Col>
      </Row>
    </Container>
  </section>
  </>
    
  )
}

export default Home