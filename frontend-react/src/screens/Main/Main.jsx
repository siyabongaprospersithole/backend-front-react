import React from "react";
import { Navbar } from "../../components/Navbar";
import { BrandsSection } from "../../components/BrandsSection";
import {HeroSection} from '../../components/HeroSection';
import {WhatWeDoSection} from '../../components/WhatWeDoSection';
import {IndustriesSection } from '../../components/IndustriesSection';
import {CaseStudiesSection} from '../../components/CaseStudiesSection';
import {FooterSection} from '../../components/FooterSection';

import "./style.css";

export const Main = () => {
  return (
    <div>
       <Navbar />
       <HeroSection 
       backgroundUrl="/img/hero-image.png"
        />
        <WhatWeDoSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <BrandsSection />
        <FooterSection />
    </div>
  );
};
