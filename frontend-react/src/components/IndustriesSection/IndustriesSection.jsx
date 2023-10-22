/*
  This component represents the Industries section of your website.
  It displays information about various industry areas.
  The content includes icons, headings, and descriptions for different industries.

  You can customize this component's content by passing the 'logo' prop.

  Example Usage:
  <IndustriesSection logo="/img/your-logo.png" />

  Component Props:
  - logo: A string representing the URL of your logo image.
*/
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IndustriesSection = () => {

  

  return (
    <section id="industries">
    <div className="container">
    <div className="row mt-77">
                <div className="col-lg-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_307_12163)">
                            <path
                                d="M52.898 55.5103H11.102C5.33123 55.5103 0.653061 50.8321 0.653061 45.0613V18.9388C0.653061 13.168 5.33123 8.48985 11.102 8.48985H52.898C58.6688 8.48985 63.3469 13.168 63.3469 18.9388V45.0613C63.3469 50.8321 58.6688 55.5103 52.898 55.5103Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M42.449 47.6735H21.551C18.6656 47.6735 16.3265 45.3344 16.3265 42.449V21.551C16.3265 18.6656 18.6656 16.3265 21.551 16.3265H42.449C45.3344 16.3265 47.6735 18.6656 47.6735 21.551V42.449C47.6735 45.3344 45.3344 47.6735 42.449 47.6735Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M45.0612 63.3469H18.9388C13.168 63.3469 8.48979 58.6688 8.48979 52.8979V11.102C8.48979 5.33121 13.168 0.653046 18.9388 0.653046H45.0612C50.832 0.653046 55.5102 5.33121 55.5102 11.102V52.8979C55.5102 58.6688 50.832 63.3469 45.0612 63.3469Z"
                                stroke="#D100C9" strokeWidth="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_307_12163">
                                <rect width="64" height="64" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                    <h3 className="mt-4">Web Design</h3>
                    <p className="mt-4">
                        We use cutting-edge web development technologies to help our clients fulfill their business
                        goals through functional, reliable solutions.
                    </p>
                </div>

                <div className="col-lg-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_307_12168)">
                            <path
                                d="M51.5919 26.1224C51.5919 40.1888 40.1888 51.5918 26.1225 51.5918C12.0561 51.5918 0.653076 40.1888 0.653076 26.1224C0.653076 12.0561 12.0561 0.653023 26.1225 0.653023C40.1888 0.653023 51.5919 12.0561 51.5919 26.1224Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M63.3469 32C63.3469 46.0663 51.9439 57.4694 37.8776 57.4694C23.8112 57.4694 12.4082 46.0663 12.4082 32C12.4082 17.9336 23.8112 6.53059 37.8776 6.53059C51.9439 6.53059 63.3469 17.9336 63.3469 32Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M51.5919 37.8775C51.5919 51.9439 40.1888 63.3469 26.1225 63.3469C12.0561 63.3469 0.653076 51.9439 0.653076 37.8775C0.653076 23.8112 12.0561 12.4081 26.1225 12.4081C40.1888 12.4081 51.5919 23.8112 51.5919 37.8775Z"
                                stroke="#D100C9" strokeWidth="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_307_12168">
                                <rect width="64" height="64" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                    <h3 className="mt-4">User experience & design</h3>
                    <p className="mt-4">
                        Our complete web design services will bring your ideas to life and provide you with a sleek,
                        high-performing product that elevates your business.
                    </p>
                </div>


                <div className="col-lg-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_307_12174)">
                            <path
                                d="M47.6735 63.3469H16.3265C7.67033 63.3469 0.653076 56.3297 0.653076 47.6735V16.3265C0.653076 7.6703 7.67033 0.653046 16.3265 0.653046H47.6735C56.3297 0.653046 63.347 7.6703 63.347 16.3265V47.6735C63.347 56.3297 56.3297 63.3469 47.6735 63.3469Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M47.6735 63.3469H16.3265C7.67033 63.3469 0.653076 56.3297 0.653076 47.6735V16.3265C0.653076 7.6703 7.67033 0.653046 16.3265 0.653046H47.6735C56.3297 0.653046 63.347 7.6703 63.347 16.3265V47.6735C63.347 56.3297 56.3297 63.3469 47.6735 63.3469Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M45.0612 55.5103H18.9388C13.168 55.5103 8.48981 50.8321 8.48981 45.0613V18.9388C8.48981 13.168 13.168 8.48985 18.9388 8.48985H45.0612C50.832 8.48985 55.5102 13.168 55.5102 18.9388V45.0613C55.5102 50.8321 50.832 55.5103 45.0612 55.5103Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M42.449 47.6735H21.551C18.6656 47.6735 16.3265 45.3344 16.3265 42.449V21.551C16.3265 18.6656 18.6656 16.3265 21.551 16.3265H42.449C45.3344 16.3265 47.6735 18.6656 47.6735 21.551V42.449C47.6735 45.3344 45.3344 47.6735 42.449 47.6735Z"
                                stroke="#D100C9" strokeWidth="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_307_12174">
                                <rect width="64" height="64" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                    <h3 className="mt-4">Mobile app development</h3>
                    <p className="mt-4">
                        Our extensive mobile development experience allows us to create custom native and cross-platform
                        iOS and Android mobile solutions for our clients.
                    </p>
                </div>

                <div className="col-lg-3">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_307_12174)">
                            <path
                                d="M47.6735 63.3469H16.3265C7.67033 63.3469 0.653076 56.3297 0.653076 47.6735V16.3265C0.653076 7.6703 7.67033 0.653046 16.3265 0.653046H47.6735C56.3297 0.653046 63.347 7.6703 63.347 16.3265V47.6735C63.347 56.3297 56.3297 63.3469 47.6735 63.3469Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M47.6735 63.3469H16.3265C7.67033 63.3469 0.653076 56.3297 0.653076 47.6735V16.3265C0.653076 7.6703 7.67033 0.653046 16.3265 0.653046H47.6735C56.3297 0.653046 63.347 7.6703 63.347 16.3265V47.6735C63.347 56.3297 56.3297 63.3469 47.6735 63.3469Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M45.0612 55.5103H18.9388C13.168 55.5103 8.48981 50.8321 8.48981 45.0613V18.9388C8.48981 13.168 13.168 8.48985 18.9388 8.48985H45.0612C50.832 8.48985 55.5102 13.168 55.5102 18.9388V45.0613C55.5102 50.8321 50.832 55.5103 45.0612 55.5103Z"
                                stroke="#D100C9" strokeWidth="2" />
                            <path
                                d="M42.449 47.6735H21.551C18.6656 47.6735 16.3265 45.3344 16.3265 42.449V21.551C16.3265 18.6656 18.6656 16.3265 21.551 16.3265H42.449C45.3344 16.3265 47.6735 18.6656 47.6735 21.551V42.449C47.6735 45.3344 45.3344 47.6735 42.449 47.6735Z"
                                stroke="#D100C9" strokeWidth="2" />
                        </g>
                        <defs>
                            <clipPath id="clip0_307_12174">
                                <rect width="64" height="64" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h3 className="mt-4">Blockchain solutions</h3>
                    <p className="mt-4">
                        We conduct market research to determine the optimal blockchain-based solutions to help you grow
                        your company and achieve your business goals.
                    </p>
                </div>
            </div>
    </div>
  </section>
  );
};

IndustriesSection.propTypes = {
  logo: PropTypes.string,
};

