import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container-fluid p-0 footer">
      <div className="container">
        <div className="row text-left">
          <div className="col-md-9">
            <div className="row footer-row ">
              <div className="col-md-3">
                <h4 className="h4-title mt-3">About Us</h4>
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
              </div>
              <div className="col-md-3">
                <h4 className="h4-title mt-3">Products</h4>
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
              </div>
              <div className="col-md-3">
                <h4 className="h4-title mt-3">Extras</h4>
                <a href="" className="footer__link">
                  Link 1
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 2
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
              </div>
              <div className="col-md-3">
                <h4 className="h4-title mt-3">Contact Us</h4>
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
                <a href="" className="footer__link">
                  Link 3
                </a>{" "}
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4 className="h4-title mt-3">Social Accounts</h4>
              <ul className="social-list ml-0">
                <li className="social-list__item">
                  <a className="social-list__link" href="http://linkedin.com">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a className="social-list__link" href="https://twitter.com">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a className="social-list__link" href="https://github.com">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a className="social-list__link" href="https://facebook.com">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a className="social-list__link" href="https://pinterest.com">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="h4-title mt-3">Subscribe to Our NewsLetter</h4>
              <form action="" class="form-inline">
                <div class="col pl-0">
                  <div class="input-group mb-3 ">
                    <input
                      type="text"
                      class="form-control bg-light text-white"
                      placeholder="Email"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fa fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="form-check mb-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Checking this box means tht you agree to our terms and
                  services. And you will be notified with news and upcoming
                  events
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 id="copyright">eWarren &copy; 2020</h5>
    </div>
  );
};

export default Footer;
