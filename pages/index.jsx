import { Fragment } from 'react';
import Head from 'next/head';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <script
          src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
          crossOrigin="anonymous"
        ></script>
        <link href="/css/styles.css" rel="stylesheet" />

        <title>Software As A Craft :: Code Smithy Ltd</title>
      </Head>

      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            Code Smithy Ltd
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Our Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">Code Smithy</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Software As A Craft
              </h2>
              <a className="btn btn-primary" href="#about">
                Show me...
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">
                Consultancy plain &amp; simple
              </h2>
              <p className="text-white-50">
                We&apos;re a software development consultancy who believe that
                our work is a craft and should be treated with the careful
                consideration for quality, reliability, performance and
                aesthetics as any other craftsmanship trade.
                <br />
                <br />
                We&apos;re engineers first and foremost and we believe that our
                work is not just an investment of our skill &amp; experience,
                it&apos;s an investment of our time as well. Time that is
                precious and irreplaceable, which means we have spent a long,
                long time making sure that the time we spend building products
                is time well spent with nothing going to waste.
              </p>
            </div>
          </div>
          <img
            src="/assets/img/about.png"
            alt="About Brand"
            className="img-fluid"
          />
        </div>
      </section>

      <section className="projects-section bg-light" id="projects">
        <div className="container px-4 px-lg-5">
          <h2 className="text-black mb-4">Our Work</h2>
          <div className="row mb-4 mb-lg-5 align-items-center">
            <div className="col-6">
              <img
                src="/assets/img/medicyn-logo.png"
                alt="MediCyn Project Logo"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <div className="featured-text text-center text-lg-left">
                <h4>MediCyn FMD</h4>
                <p className="text-black-50 mb-0">
                  A native Android app that ran on Honeywell PDA hand scanners.
                  The software would be used to scan boxes of medication, parse
                  the information on the barcode and call a web service provided
                  by the National Medicine Verification System to return various
                  bits of information like is the medicine out-of-date, stolen,
                  recalled etc.
                </p>
              </div>
            </div>
          </div>

          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-12">
              <img
                src="/assets/img/medicyn-showreel.png"
                alt="MediCyn Showreel"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section bg-black" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    86-90 Paul Street, London, EC2A 4NE
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="#!">hello@thecodesmithy.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">+44 7505 494975</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container px-4 px-lg-5">
          Copyright &copy; Code Smithy Ltd. 2021
        </div>
      </footer>
    </Fragment>
  );
};

export default HomePage;
