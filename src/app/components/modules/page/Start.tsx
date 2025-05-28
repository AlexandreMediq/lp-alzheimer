"use client";
import React, { useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { // Importe dos icons
  FaGlobeAmericas,
  FaChartLine,
  FaHeartbeat,
  FaBrain,
  FaVial,
  FaVenus,
  FaUserClock,
  FaArrowRight,
  FaTint,
  FaStethoscope,
} from "react-icons/fa";

export default function Start() {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isGrabbing, setIsGrabbing] = useState(false); // Estado para controlar o cursor

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
    <>
    <section className="p-6 bg-[#d8eaf8] text-[#001965]">
      <h1 className="text-5xl font-bold mb-6 text-center">
      Introdução à Doença de Alzheimer
      </h1>

      <div className="flex justify-center">
        <div
          ref={sliderRef}
          className={`keen-slider max-w-xl w-[1200px] ${
            isGrabbing ? "cursor-grabbing" : "cursor-grab" // Define o cursor
          }`}
          onMouseDown={() => setIsGrabbing(true)}
          onMouseUp={() => setIsGrabbing(false)}
          onMouseLeave={() => setIsGrabbing(false)}
        >
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
      
      <div className="mt-6 flex justify-center gap-2"> 
        {[...Array(7)].map((_, idx) => ( // contagem dos carrosel 
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`
              w-3 h-3 rounded-full transition-all
              ${currentSlide === idx ? "bg-[#001965]" : "bg-[#001965]/30"}
            `}
          />
        ))}
      </div>
    </section>

    <section className="bg-[#fafafa] text-[#001965] py-12">
      <div className="px-4 max-w-[1200px] mx-auto text-justify">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
          Diagn&oacute;stico da Doen&ccedil;a de Alzheimer
        </h1>

        {/* Par&aacute;grafo 1 */}
        <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
          <div className="min-w-[24px] h-6 flex items-start justify-center pt-1 shrink-0">
            <FaArrowRight className="w-6 h-6 text-[#001965]" />
          </div>
          <p className="text-base sm:text-lg md:text-2xl break-words">
            A Doen&ccedil;a de Alzheimer historicamente &eacute; diagnosticada em pacientes com problemas de mem&oacute;ria com base em apresenta&ccedil;&otilde;es cl&iacute;nicas; no entanto, cerca de
            <span className="font-bold"> 20% dos casos s&atilde;o diagnosticados erroneamente. </span>
          </p>
        </div>

        {/* Par&aacute;grafo 2 */}
        <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
          <div className="min-w-[24px] h-6 flex items-start justify-center pt-1 shrink-0">
            <FaArrowRight className="w-6 h-6 text-[#001965]" />
          </div>
          <p className="text-base sm:text-lg md:text-2xl break-words">
            O <span className="font-bold">diagn&oacute;stico cl&iacute;nico</span> se baseia na <span className="font-bold">obten&ccedil;&atilde;o de um hist&oacute;rico</span> detalhado do paciente e sua fam&iacute;lia; a investiga&ccedil;&atilde;o diagn&oacute;stica padr&atilde;o inclui um <span className="font-bold">teste de avalia&ccedil;&atilde;o cognitiva</span>, um <span className="font-bold">invent&aacute;rio das atividades cotidianas</span>, <span className="font-bold">hemogramas</span> e <span className="font-bold">imagens da estrutura cerebral</span> (RM, TC).
          </p>
        </div>

        {/* Par&aacute;grafo 3 */}
        <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
          <div className="min-w-[24px] h-6 flex items-start justify-center pt-1 shrink-0">
            <FaArrowRight className="w-6 h-6 text-[#001965]" />
          </div>
          <p className="text-base sm:text-lg md:text-2xl break-words">
            Para diagnosticar a Doen&ccedil;a de Alzheimer com seguran&ccedil;a, s&atilde;o necess&aacute;rios <span className="font-bold">biomarcadores</span> (como amiloide-beta e p-tau no LCR ou imagens PET) para <span className="font-bold">complementar a avalia&ccedil;&atilde;o cl&iacute;nica.</span>
          </p>
        </div>
      </div>

      {/* Cards com &iacute;cones */}
      <div className="max-w-[1200px] mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-6">
        {/* Card 1 */}
        <div className="bg-[#d8eaf8] p-5 flex flex-col sm:flex-row items-center gap-4 w-full rounded-md shadow">
          <div className="flex-shrink-0">
            <FaTint className="w-14 h-14 sm:w-20 sm:h-20 text-[#8A0303]" />
          </div>
          <p className="text-base sm:text-lg text-justify">
            <span className="font-bold">Novos biomarcadores sangu&iacute;neos</span> est&atilde;o sendo desenvolvidos e podem ser mais acess&iacute;veis e custo-efetivos para facilitar um diagn&oacute;stico mais r&aacute;pido e precoce da Doen&ccedil;a de Alzheimer em pessoas com comprometimento cognitivo.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#d8eaf8] p-5 flex flex-col sm:flex-row items-center gap-4 w-full rounded-md shadow">
          <div className="flex-shrink-0">
            <FaStethoscope className="w-14 h-14 sm:w-20 sm:h-20 text-[#28A745]" />
          </div>
          <p className="text-base sm:text-lg text-justify">
            As pr&aacute;ticas cl&iacute;nicas variam de pa&iacute;s para pa&iacute;s, e <span className="font-bold">diferentes especialistas de sa&uacute;de</span> &mdash; como psiquiatras, neurologistas, geriatras e m&eacute;dicos da aten&ccedil;&atilde;o b&aacute;sica &mdash; <span className="font-bold">podem estar envolvidos no diagn&oacute;stico da DA.</span>
          </p>
        </div>
      </div>
    </section>

    {/* Saiba Mais */}    
    <section className="p-6 bg-[#FAFAFA] text-[#001965]">
      <h1 className="text-4xl text-center font-bold  mb-4 ">Saiba Mais</h1>

      <div className="max-w-[1200px] mx-auto flex lg:flex-row gap-6">
        {/* Card 1 */}
        <div className="w-[300px] bg-[#fafafa] p-4 text-center shadow rounded-lg hover:scale-105 transition cursor-pointer">
          <img className="max-w-[150px] mx-auto" src="./img/home-icon10.svg" alt="imagem cerebro" />
          <p className="font-bold  text-base sm:text-lg">O passado, o presente e o futuro da Doen&ccedil;a de
          Alzheimer&nbsp;</p>
        </div>

        {/* Card 2 */}
        <div className="w-[300px] bg-[#fafafa] p-4 text-center shadow rounded-lg hover:scale-105 transition cursor-pointer">
          <img className="max-w-[100px] mx-auto" src="./img/home-icon11.svg" alt="imagem cerebro" />
          <p className="font-bold text-base sm:text-lg">O passado, o presente e o futuro da Doen&ccedil;a de
          Alzheimer&nbsp;</p>
        </div>

      </div>
    </section>

    </>
  );
}

