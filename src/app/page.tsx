import Image from "next/image";
import Link from "next/link";

// --- COMPONENTES DA PÁGINA ---

const Header = () => (
  <header className="hero-section text-white">
    <div className="hero-content container mx-auto px-6 py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight mb-4 text-[#faffed]">Clínica Gama</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Cuidando de você e sua família com excelência e tecnologia.
        </h2>
        <p className="text-lg md:text-xl text-[#a7c957] max-w-2xl mx-auto mb-8">
          Mais de 65 serviços de saúde e bem-estar em um só lugar. Encontre o especialista que você precisa e agende sua consulta de forma rápida e fácil.
        </p>
        <a href="https://wa.me/5575999112695?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Gama."
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center bg-[#6a994e] hover:bg-[#386641] text-white font-bold text-lg px-8 py-4 rounded-lg custom-shadow-lg smooth-transition transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Agendar Consulta pelo WhatsApp
        </a>
      </div>
    </div>
  </header>
);

const SocialProof = () => (
  <section id="diferenciais" className="bg-[#faffed] py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-[#a7c957] p-4 rounded-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06250c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <p className="text-2xl font-bold text-[#a7c957]">+10.000</p>
          <p className="text-[#386641]">Pacientes Atendidos</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#a7c957] p-4 rounded-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06250c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <p className="text-2xl font-bold text-[#a7c957]">Desde 2009</p>
          <p className="text-[#386641]">Cuidando da sua Saúde</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#a7c957] p-4 rounded-full mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06250c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
          </div>
          <p className="text-2xl font-bold text-[#a7c957]">+65</p>
          <p className="text-[#386641]">Serviços e Especialidades</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#a7c957] p-4 rounded-full mb-3">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#06250c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
          </div>
          <p className="text-2xl font-bold text-[#a7c957]">4.8 Estrelas</p>
          <p className="text-[#386641]">Avaliação de Pacientes</p>
        </div>
      </div>
    </div>
  </section>
);

const Specialties = () => (
    <section id="especialidades" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a7c957]">Nossas Especialidades</h2>
          <p className="mt-4 text-lg text-[#386641]">Oferecemos uma ampla variedade de especialidades para garantir um cuidado completo e integrado para você e sua família.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#faffed] p-8 rounded-lg custom-shadow smooth-transition hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-[#a7c957]">Odontologia Geral</h3>
              <p className="text-[#386641]">Ortodontia, Próteses, Facetas, Harmonização Orofacial, Periodontia, Endodontia e atendimento infantil.</p>
              <Link href="/clareamento" className="text-[#386641] font-semibold hover:text-[#06250c] smooth-transition mt-4 inline-block">
                ✨ Campanha de Clareamento Dental →
              </Link>
          </div>
          <div className="bg-[#faffed] p-8 rounded-lg custom-shadow smooth-transition hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-[#a7c957]">Cirurgias e Implantes</h3>
              <p className="text-[#386641]">Cirurgia da ATM, extração de sisos (terceiros molares) e implantes dentários com especialistas.</p>
          </div>
          <div className="bg-[#faffed] p-8 rounded-lg custom-shadow smooth-transition hover:-translate-y-2">
               <h3 className="text-2xl font-bold mb-3 text-[#a7c957]">Saúde da Mulher</h3>
              <p className="text-[#386641]">Consultas ginecológicas, preventivo completo, ultrassonografias e fisioterapia para a saúde da mulher.</p>
          </div>
          <div className="bg-[#faffed] p-8 rounded-lg custom-shadow smooth-transition hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-[#a7c957]">Clínica Médica e Pediatria</h3>
              <p className="text-[#386641]">Atendimento com clínico geral, pediatria para as crianças e medicina do trabalho para empresas.</p>
          </div>
          <div className="bg-[#faffed] p-8 rounded-lg custom-shadow smooth-transition hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-[#a7c957]">Bem-Estar e Nutrição</h3>
              <p className="text-[#386641]">Acompanhamento com psicólogo para saúde mental e nutricionista para uma vida mais saudável.</p>
          </div>
          <div className="bg-[#faffed] p-8 rounded-lg custom-shadow smooth-transition hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-[#a7c957]">Fonoaudiologia e Fisioterapia</h3>
              <p className="text-[#386641]">Tratamentos para TEA, seletividade alimentar (Modelo Denver) e fisioterapia clínica e pediátrica.</p>
          </div>
        </div>
        <p className="text-center mt-10 text-lg text-[#386641] font-semibold">... e muito mais!</p>
      </div>
    </section>
  );

const Founders = () => (
  <section id="fundadores" className="bg-[#faffed] py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="flex-1">
              <Image
                src="/foto-paulo.jpeg"
                alt="Foto do Dr. Paulo Gama, fundador da Clínica Gama"
                width={300}
                height={400}
                className="rounded-lg custom-shadow-lg w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/foto-fabiana.jpg"
                alt="Foto da Dra. Fabiana Gama, fundadora da Clínica Gama"
                width={300}
                height={400}
                className="rounded-lg custom-shadow-lg w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#a7c957] mb-4">Conheça os Fundadores</h2>
          <h3 className="text-xl font-semibold text-[#386641] mb-4">Dr. Paulo Gama e Dra. Fabiana Gama</h3>
          <p className="text-lg text-[#386641] mb-6">
              Irmãos e apaixonados pela saúde, Dr. Paulo e Dra. Fabiana fundaram a Clínica Gama com a missão de oferecer um atendimento humanizado, acessível e de alta qualidade para a população de Ribeira do Pombal e região. Juntos, lideram uma equipe de especialistas dedicados a transformar vidas através do cuidado.
          </p>
          <Link href="#especialidades" className="text-[#386641] font-semibold hover:text-[#06250c] smooth-transition">
            Conheça nossa equipe de especialistas →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
    const testimonialsData = [
        {
            text: "Profissionais capacitados e um atendimento humanizado!",
            author: "Estela Bitencourt",
            imageSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVISJmLzy7IIAUCKFpfWVskPlIaWyFBNBSjGmc3VdAWivgT-c_7bg=w81-h81-p-rp-mo-br100",
            imageAlt: "Depoimento de Estela Bitencourt"
        },
        {
            text: "Profissionais de excelência e um ótimo atendimento.",
            author: "wagner macedo",
            imageSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVqoVDq3-5BE9lsI4kDEaK7RlOuamwR4O8eJ26ZCBzBV8M_L8ja=w81-h81-p-rp-mo-br100",
            imageAlt: "Depoimento de wagner macedo"
        },
        {
            text: "Sou muito bem atendida, os funcionários são muito corteses, e se preocupam genuinamente com você, senhora me sentir muito acolhida por essa equipe maravilhosa, não tenho do que reclamar ❤️",
            author: "Camomila Passos",
            imageSrc: "https://lh3.googleusercontent.com/a-/ALV-UjWLqbTRovNiJHex59WJ4UH3Ub14ihbSz_wD-uIDjrEugjpVqIPwrA=w81-h81-p-rp-mo-br100",
            imageAlt: "Depoimento de Camomila Passos"
        }
    ];

    return (
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#a7c957]">O que nossos pacientes dizem</h2>
            <p className="mt-4 text-lg text-[#386641]">A confiança e o sorriso de nossos pacientes são nossa maior recompensa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-[#faffed] p-8 rounded-lg border border-gray-200 custom-shadow flex flex-col">
  <p className="text-[#386641] mb-6 flex-grow">&quot;{testimonial.text}&quot;</p> {/* <-- Correção aplicada */}
  <div className="flex items-center mt-auto">
                  <Image src={testimonial.imageSrc} alt={testimonial.imageAlt} width={48} height={48} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-bold text-[#06250c] capitalize">{testimonial.author}</p>
                    <p className="text-sm text-[#386641]">Paciente</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

const FinalCTA = () => (
  <section id="cta-final" className="bg-[#06250c] text-white">
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pronto para dar o primeiro passo pela sua saúde?</h2>
      <p className="text-lg md:text-xl text-[#a7c957] max-w-2xl mx-auto mb-8">
          Nossa equipe está pronta para te atender. Clique no botão abaixo e fale conosco diretamente pelo WhatsApp para agendar sua consulta.
      </p>
      <a href="https://wa.me/5575999112695?text=Olá!%20Vi%20o%20site%20e%20gostaria%20de%20agendar%20uma%20consulta." 
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center bg-[#6a994e] hover:bg-[#386641] text-white font-bold text-lg px-8 py-4 rounded-lg custom-shadow-lg smooth-transition transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Falar com Atendente Agora
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#06250c] text-[#faffed]">
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white">Clínica Gama</h3>
          <p className="text-sm text-[#a7c957]">Rua João de Brito, 136 - Centro, Ribeira do Pombal 48400-000</p>
          <p className="text-sm text-[#a7c957]">Telefone/WhatsApp: (75) 9 9911-2695</p>
        </div>
        <div className="text-center">
          <p>© 2025 Clínica Gama. Todos os direitos reservados.</p>
          <a href="https://www.instagram.com/clinicagamarpombal" target="_blank" rel="noopener noreferrer" className="text-[#6a994e] hover:text-[#a7c957] smooth-transition">
            Siga-nos no Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main>
      <Header />
      <SocialProof />
      <Specialties />
      <Founders />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}