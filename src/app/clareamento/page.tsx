// src/app/clareamento/page.tsx

import Image from "next/image";
import Link from "next/link";

// Componente para ícones para facilitar a reutilização
const Icon = ({ name, className }: { name: string; className?: string }) => {
    const icons: { [key: string]: React.ReactNode } = {
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
        coffee: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>,
        camera: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
        frown: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>,
        sparkles: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9 1.9 5.8 1.9-5.8 5.8-1.9-5.8-1.9z"/></svg>,
        'shield-check': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
        'user-check': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
        'chevron-down': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
        'map-pin': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
        phone: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
        clock: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    };
    return <div className={className}>{icons[name]}</div>;
}

// Estilo para o botão de CTA para evitar repetição
const ctaButtonStyle = "transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg";

const ClareamentoPage = () => {
    return (
        <div className="bg-[#faffed] text-[#386641]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {/* ========== HEADER ========== */}
            <header className="bg-[#faffed]/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Icon name="logo" className="text-[#6a994e]" />
                        <span className="font-bold text-xl text-[#06250c]">Clínica Gama</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#inicio" className="text-[#386641] hover:text-[#6a994e]">Início</a>
                        <a href="#beneficios" className="text-[#386641] hover:text-[#6a994e]">Benefícios</a>
                        <a href="#depoimentos" className="text-[#386641] hover:text-[#6a994e]">Depoimentos</a>
                        <a href="#contato" className="text-[#386641] hover:text-[#6a994e]">Contato</a>
                    </div>
                    <a href="https://wa.me/5575999112695?text=Olá!%20Vi%20a%20página%20de%20clareamento%20e%20gostaria%20de%20agendar%20uma%20avaliação." 
                       target="_blank" rel="noopener noreferrer"
                       className={`hidden md:block bg-[#6a994e] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#386641] ${ctaButtonStyle}`}>
                        Agende sua Avaliação
                    </a>
                </nav>
            </header>

            <main>
                {/* ========== HERO SECTION ========== */}
                <section id="inicio" className="relative text-white">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1583344692142-8a3f1245a2db?q=80&w=1974&auto=format&fit=crop')"}}></div>
                    <div className="relative bg-[#06250c]/70 min-h-[70vh] flex items-center">
                        <div className="container mx-auto px-6 text-center">
                            <div className="max-w-3xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Conquiste o Sorriso Branco e Radiante que Você Sempre Sonhou</h1>
                                <p className="text-lg md:text-xl mb-8 text-gray-200">Resultados visíveis desde a primeira sessão com uma técnica segura, rápida e realizada pelos melhores especialistas.</p>
                                <a href="https://wa.me/5575999112695?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20clareamento%20dental." 
                                   target="_blank" rel="noopener noreferrer"
                                   className={`bg-[#a7c957] text-[#06250c] px-10 py-4 rounded-full font-bold text-lg inline-block hover:bg-[#b5e48c] ${ctaButtonStyle}`}>
                                    Quero um Sorriso Mais Branco!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== PROBLEM SECTION ========== */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-[#06250c]">Seu sorriso te incomoda?</h2>
                        <p className="text-[#386641] max-w-2xl mx-auto mb-12">Muitas pessoas deixam de sorrir com confiança por causa da aparência dos dentes. Você se identifica com alguma destas situações?</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-[#faffed] p-8 rounded-xl shadow-md">
                                <Icon name="coffee" className="w-12 h-12 mx-auto text-[#6a994e] mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-[#06250c]">Dentes Amarelados</h3>
                                <p className="text-[#386641]">O consumo de café, vinho e outros alimentos pigmentados escureceu seu sorriso ao longo do tempo.</p>
                            </div>
                            <div className="bg-[#faffed] p-8 rounded-xl shadow-md">
                                <Icon name="camera" className="w-12 h-12 mx-auto text-[#6a994e] mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-[#06250c]">Vergonha de Sorrir</h3>
                                <p className="text-[#386641]">Você evita sorrir em fotos ou em público por não se sentir à vontade com a cor dos seus dentes.</p>
                            </div>
                            <div className="bg-[#faffed] p-8 rounded-xl shadow-md">
                                <Icon name="frown" className="w-12 h-12 mx-auto text-[#6a994e] mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-[#06250c]">Autoestima Baixa</h3>
                                <p className="text-[#386641]">A insatisfação com seu sorriso afeta sua autoconfiança em momentos importantes da vida pessoal e profissional.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== BENEFITS/SOLUTION SECTION ========== */}
                <section id="beneficios" className="py-16 md:py-24 bg-[#faffed]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-[#06250c]">A Solução Definitiva para um Sorriso Perfeito</h2>
                            <p className="text-[#386641] max-w-2xl mx-auto">Nosso clareamento dental a laser combina tecnologia de ponta e cuidado profissional para oferecer resultados incríveis com total segurança.</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <Image src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop" alt="Dentista aplicando clareamento dental" width={600} height={400} className="rounded-xl shadow-2xl w-full" />
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-[#a7c957]/20 text-[#6a994e] p-3 rounded-full mr-4"><Icon name="sparkles" className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-[#06250c]">Resultados Imediatos e Duradouros</h3>
                                        <p className="text-[#386641]">Clareie seus dentes em vários tons e veja a diferença já na primeira sessão. Com os cuidados corretos, seu novo sorriso pode durar anos.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-[#a7c957]/20 text-[#6a994e] p-3 rounded-full mr-4"><Icon name="shield-check" className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-[#06250c]">Procedimento Seguro e Indolor</h3>
                                        <p className="text-[#386641]">Utilizamos produtos de alta qualidade e técnicas que minimizam a sensibilidade, garantindo um tratamento confortável e seguro para o esmalte dental.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-[#a7c957]/20 text-[#6a994e] p-3 rounded-full mr-4"><Icon name="user-check" className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-[#06250c]">Acompanhamento Profissional</h3>
                                        <p className="text-[#386641]">Todo o processo é supervisionado por dentistas experientes, que personalizam o tratamento para atender às suas necessidades e garantir o melhor resultado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== TESTIMONIALS SECTION ========== */}
                <section id="depoimentos" className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-[#06250c]">Quem Fez, Recomenda</h2>
                            <p className="text-[#386641] max-w-2xl mx-auto">Veja o que nossos pacientes dizem sobre a transformação de seus sorrisos.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-[#faffed] p-8 rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                    <Image src="https://placehold.co/60x60/a7c957/06250c?text=JS" alt="Foto de Joana Silva" width={60} height={60} className="w-14 h-14 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-bold text-lg text-[#06250c]">Joana Silva</h4>
                                        <p className="text-sm text-gray-500">Paciente Verificada</p>
                                    </div>
                                </div>
                                <p className="text-[#386641]">"Nunca imaginei que teria um sorriso tão branco! O tratamento foi super tranquilo e a equipe é maravilhosa. Minha autoestima mudou completamente."</p>
                            </div>
                            <div className="bg-[#faffed] p-8 rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                     <Image src="https://placehold.co/60x60/a7c957/06250c?text=MP" alt="Foto de Marcos Pereira" width={60} height={60} className="w-14 h-14 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-bold text-lg text-[#06250c]">Marcos Pereira</h4>
                                        <p className="text-sm text-gray-500">Paciente Verificado</p>
                                    </div>
                                </div>
                                <p className="text-[#386641]">"Como tomo muito café, meus dentes eram bem amarelados. O resultado do clareamento foi impressionante e rápido. Recomendo a todos!"</p>
                            </div>
                            <div className="bg-[#faffed] p-8 rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                    <Image src="https://placehold.co/60x60/a7c957/06250c?text=CF" alt="Foto de Carla Ferreira" width={60} height={60} className="w-14 h-14 rounded-full mr-4" />
                                    <div>
                                        <h4 className="font-bold text-lg text-[#06250c]">Carla Ferreira</h4>
                                        <p className="text-sm text-gray-500">Paciente Verificada</p>
                                    </div>
                                </div>
                                <p className="text-[#386641]">"Tinha medo de sentir dor, mas o procedimento foi muito confortável. A equipe é incrível e atenciosa. Amei o resultado!"</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* ========== FAQ SECTION ========== */}
                <section id="faq" className="py-16 md:py-24 bg-[#faffed]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-[#06250c]">Dúvidas Frequentes</h2>
                            <p className="text-[#386641] max-w-2xl mx-auto">Esclareça as principais perguntas sobre o clareamento dental.</p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <div className="bg-white rounded-lg shadow-sm">
                                <details className="p-6 group">
                                    <summary className="flex items-center justify-between cursor-pointer">
                                        <h3 className="text-lg font-semibold text-[#06250c]">O clareamento dental causa sensibilidade?</h3>
                                        <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <p className="text-[#386641] mt-4">Nossa técnica e produtos são desenvolvidos para minimizar a sensibilidade. A maioria dos pacientes relata pouco ou nenhum desconforto. Caso ocorra, é temporária e controlada com géis dessensibilizantes.</p>
                                </details>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm">
                                <details className="p-6 group">
                                    <summary className="flex items-center justify-between cursor-pointer">
                                        <h3 className="text-lg font-semibold text-[#06250c]">Quanto tempo dura o resultado?</h3>
                                        <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <p className="text-[#386641] mt-4">A durabilidade varia de acordo com os hábitos de cada paciente, mas em média, os resultados podem durar de 1 a 3 anos. Evitar alimentos com corantes e manter uma boa higiene bucal ajuda a prolongar o efeito.</p>
                                </details>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm">
                                <details className="p-6 group">
                                    <summary className="flex items-center justify-between cursor-pointer">
                                        <h3 className="text-lg font-semibold text-[#06250c]">Qualquer pessoa pode fazer o tratamento?</h3>
                                        <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <p className="text-[#386641] mt-4">O tratamento é contraindicado para gestantes, lactantes, menores de 15 anos e pessoas com cáries ou problemas gengivais não tratados. Uma avaliação detalhada é essencial para determinar se você é um candidato ideal.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== CTA & CONTACT FORM SECTION ========== */}
                <section id="contato" className="py-16 md:py-24 bg-[#386641] text-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Dê o Primeiro Passo Para o Seu Novo Sorriso!</h2>
                                <p className="mb-6 text-[#a7c957]">Agende sua avaliação sem compromisso. Nossa equipe está pronta para te atender e tirar todas as suas dúvidas.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Icon name="map-pin" className="w-6 h-6 mr-3 text-[#a7c957]" />
                                        <span>Rua João de Brito, 136 - Centro, Ribeira do Pombal</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon name="phone" className="w-6 h-6 mr-3 text-[#a7c957]" />
                                        <span>(75) 9 9911-2695</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Icon name="clock" className="w-6 h-6 mr-3 text-[#a7c957]" />
                                        <span>Segunda a Sexta, das 8h às 18h</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-2xl">
                                <h3 className="text-2xl font-bold text-[#06250c] mb-6 text-center">Fale com um Especialista</h3>
                                <a href="https://wa.me/5575999112695?text=Olá!%20Vi%20a%20página%20de%20clareamento%20e%20gostaria%20de%20agendar%20uma%20avaliação." 
                                   target="_blank" rel="noopener noreferrer"
                                   className={`w-full block text-center bg-[#6a994e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#386641] ${ctaButtonStyle}`}>
                                    QUERO AGENDAR PELO WHATSAPP
                                </a>
                                <p className="text-center text-sm text-gray-500 mt-4">Clique no botão para ser atendido rapidamente.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ========== FOOTER ========== */}
            <footer className="bg-[#06250c] text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 Clínica Gama. Todos os direitos reservados.</p>
                    <Link href="/" className="text-sm text-[#a7c957] mt-2 inline-block hover:underline">
                        Voltar para a página inicial
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default ClareamentoPage;