"use client";
import React, { useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  FaGlobeAmericas,
  FaChartLine,
  FaHeartbeat,
  FaBrain,
  FaVial,
  FaVenus,
  FaUserClock,
} from "react-icons/fa";

export default function Start() {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      slides: {
        perView: 1,
        spacing: 24,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 4500);
        };

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", clearNextTimeout);
          slider.container.addEventListener("mouseout", nextTimeout);
          nextTimeout();
        });

        slider.on("destroyed", () => {
          clearTimeout(timeout);
          slider.container.removeEventListener("mouseover", clearNextTimeout);
          slider.container.removeEventListener("mouseout", nextTimeout);
        });

        slider.on("slideChanged", nextTimeout);
      },
    ]
  );

  return (
    <section className="p-6 bg-[#d8eaf8] text-[#001965]">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Introdução à Doença de Alzheimer
      </h2>

      <div className="flex justify-center">
        <div ref={sliderRef} className="keen-slider max-w-xl w-[1200px]">

          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaGlobeAmericas className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              Ao redor do mundo, mais de 55 milhões de pessoas vivem com demência.
               Há aproximadamente 10 milhões de novos casos todos os anos.
            </p>
          </div>


          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaChartLine className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              Os casos de demência têm aumentado e a estimativa é de que 139
              milhões de pessoas ao redor do mundo vivam com a doença em 2050.
            </p>
          </div>

          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaHeartbeat className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              A demência é a 7ª causa de mortes no mundo e uma das principais
              causas de deficiência e dependência em idosos.
            </p>
          </div>

          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaBrain className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              A demência é uma síndrome, definida como um significante declínio
              da memória e ≥1 das funções cognitivas (por exemplo: fala, função
              viso-espacial, atenção ou funções executivas), interferindo nas
              as atividades cotidianas do indivíduo.
            </p>
          </div>

          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaVial className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              A Doença de Alzheimer é a forma mais comum de demência, sendo
              responsável por 60%-70% dos casos.
            </p>
          </div>

          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaVenus className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              As mulheres sofrem mais anos com incapacidades e mortalidade
              devido à demência do que os homens.
            </p>
          </div>

          <div className="keen-slider__slide text-[#001965] rounded-lg p-6 flex flex-col md:flex-row items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0 text-[#001965]">
              <FaUserClock className="w-10 h-10" />
            </div>
            <p className="font-semibold text-2xl flex-1">
              O risco de desenvolver Alzheimer aos 45 anos é duas vezes maior em
              mulheres comparado à homens. Esse risco aumenta ligeiramente para
              ambos os sexos aos 65 anos.
            </p>
          </div>
        </div>
      </div>
        <div className="text-center text-[#001965] font-medium">
          {currentSlide + 1} / 7
        </div>
    </section>
  );
}

