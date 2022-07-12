import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../styled-components/Container";
import { StyledLink, StyledLinkMenu } from "../styled-components/StyledLink";
import { Image } from "./Image";

import { useState } from "react";

import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

export function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)

        if (!openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''
        }
    }

   

    return (
        <div>
        <Box bgcolor="#FFF" display="flex" height={90} alignItems="center">
            <Container>
                <Box display="flex" alignItems='center'>
                    <Box flex={1}>
                       <Link to="/"><Image source="/src/assets/images/logo_wirklich.svg" alt="Logo Wirklich"/></Link> 
                    </Box>

                    <Box className="hidden lg:block">
                        <nav className="flex gap-8">
                            <Link to="/empresa">
                                <StyledLink>
                                Empresa
                                </StyledLink>
                            </Link>

                            <Link to="/solucoes">
                                <StyledLink>
                                Soluções
                                </StyledLink>
                            </Link>

                            <Link to="/#tecnologia">
                                <StyledLink>
                                Tecnologia
                                </StyledLink>
                            </Link>

                            <Link to="/#meio-ambiente">
                                <StyledLink>
                                Meio Ambiente
                                </StyledLink>
                            </Link>

                            <Link to="/#inovacao">
                                <StyledLink>
                                Inovação
                                </StyledLink>
                            </Link>

                            <Link to="/#noticias">
                                <StyledLink>
                                Notícias
                                </StyledLink>
                            </Link>

                            <Link to="/contato">
                                <StyledLink>
                                Contato
                                </StyledLink>
                            </Link>
                        </nav>
                    </Box>

                    <Box className="block lg:hidden">
                    <div onClick={toggleMenu} className="flex flex-col gap-1 cursor-pointer">
                    <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${openMenu? 'rotate-45 translate-y-[7px]' : 'rotate-0'}`}></span>
                    <span className={`block bg-black h-[0.20rem] duration-700 ${openMenu? 'w-0 opacity-0' : 'w-6 opacity-100'}`}></span>
                    <span className={`block bg-black w-6 h-[0.20rem] duration-700 ${openMenu? '-rotate-45 -translate-y-[7px]' : 'rotate-0'}`}></span>
                    </div>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Box className={`absolute menu-gradiente w-full duration-700 overflow-hidden ${openMenu? 'z-50 opacity-100 translate-y-0 h-screen' : 'opacity-0 translate-y-[1000px] h-0'}`}>
                <nav className="flex flex-col gap-8 items-center justify-center h-[75%] w-full">

                            <Link className={`duration-700 delay-[710ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/empresa">
                                <StyledLinkMenu>
                                Empresa
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[760ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/solucoes">
                                <StyledLinkMenu>
                                Soluções
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[810ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#tecnologia">
                                <StyledLinkMenu>
                                Tecnologia
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[860ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#meio-ambiente">
                                <StyledLinkMenu>
                                Meio Ambiente
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[910ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#inovacao">
                                <StyledLinkMenu>
                                Inovação
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[960ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/#noticias">
                                <StyledLinkMenu>
                                Notícias
                                </StyledLinkMenu>
                            </Link>

                            <Link className={`duration-700 delay-[1010ms] ${openMenu? 'translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`} to="/contato">
                                <StyledLinkMenu>
                                Contato
                                </StyledLinkMenu>
                            </Link>
                     </nav>

                     <div className={`flex justify-center w-full gap-3 duration-700 delay-[1300ms] mt-3 ${openMenu? '-translate-y-3 opacity-100' : 'translate-y-0 opacity-0'}`}>
                     <a target='_blank' href="https://www.facebook.com/Wirklich-Ind%C3%BAstria-de-Pl%C3%A1sticos-Ltda-374390952621458"><FaFacebookF color="#FFF" size={30}/></a>  
                     <a target='_blank' href="https://www.instagram.com/wirklichwkl/"><FiInstagram color="#FFF" size={30} /></a>   
                     <a target='_blank' href="https://www.linkedin.com/company/24549153/"><FaLinkedinIn color="#FFF" size={30} /></a>   
                     <a target='_blank' href="https://www.youtube.com/channel/UC8MKBHOikTg5RdVzbuWbqSA"><FaYoutube color="#FFF" size={30} /></a>   



                     </div>
        </Box>


        </div>
    )
}